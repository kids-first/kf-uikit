/* eslint-disable  */
import React from 'react';
import { flattenDeep, filter, mapValues, findKey, isUndefined } from 'lodash';
import requireContext from 'require-context';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { configure } from 'enzyme';
import * as emotion from '../src/kfFeels';
import KFThemeProvider from '../src/index';
import { getNodes, markNodes, getStylesFromClassNames, importAll } from './lib/process-components';
import { getClassNamesFromNodes } from './lib/utils';
import { replaceClassNames } from './lib/replace-class-names';
import writeStylesheets from './lib/write-stylesheets';
import defaultTheme from '../src/theme/defaultTheme';

configure({ adapter: new Adapter() });

// const componentGlob = 'src/components/Typography/Headings/Headings.jsx';
const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<KFThemeProvider>{component}</KFThemeProvider>, rest);

const EnzymeCreate = renderWithTheme(create);
const EnzymeRender = comp => EnzymeCreate(React.createElement(comp)).toJSON();

async function main() {
  // get all components from top level index files
  const comps = importAll(requireContext('../../src/components', true, /index\.js/));

  // render components with Enzyme
  const enzymeComponents = flattenDeep(comps).reduce(
    (acc, compHash) => ({ ...acc, ...compHash }),
    {},
  );

  // make a hash map of components
  const renderedComps = mapValues(enzymeComponents, component => {
    if (component.contextTypes) {
      return EnzymeRender(component);
    } else if (
      typeof component === 'object' &&
      Object.values(component).some(subComponent => subComponent.contextTypes)
    ) {
      return mapValues(component, x => EnzymeRender(x));
    } else {
      delete enzymeComponents[findKey(enzymeComponents, component)];
    }
  });
  // TODO: make more efficient
  // flatten nested components
  for (const comp in renderedComps) {
    let compDef = renderedComps[comp];
    if (isUndefined(compDef.props)) {
      Object.keys(compDef).forEach(x => {
        renderedComps[`${comp}.${x}`] = compDef[x];
      });
      delete renderedComps[comp];
    }
  }

  const nodes = getNodes(Object.values(renderedComps));
  markNodes(nodes);
  const classNames = getClassNamesFromNodes(nodes[0]);
  const styles = getStylesFromClassNames(classNames);
  const replacedClassnames = replaceClassNames(classNames, styles, '', emotion.caches.key);

  writeStylesheets(defaultTheme, replacedClassnames).then(() => {
    console.log('Finished Building Stylesheets');
  });
}

// eslint-disable-next-line
main().catch(console.error);
