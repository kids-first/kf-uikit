/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { flattenDeep, filter, mapValues } from 'lodash';
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

async function main() {
  // get all components from top level index files
  const comps = importAll(requireContext('../../src/components', true, /index\.js/));
  // filter imports for compoentns only
  const filterComps = c =>
    filter(c, 'contextTypes').reduce(
      (acc, comp) => ({
        ...acc,
        [comp.displayName]: comp,
      }),
      {},
    );
  // render components with Enzyme
  const enzymeComponents = flattenDeep(comps)
    .map(c => filterComps(c))
    .reduce((acc, compHash) => ({ ...acc, ...compHash }), {});
  // make a hash map of components
  const renderedComps = mapValues(enzymeComponents, c =>
    EnzymeCreate(React.createElement(c)).toJSON(),
  );
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
