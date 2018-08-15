/* eslint-disable */
import React from 'react';
// import { format } from 'prettier';
import { flattenDeep, filter, mapValues } from 'lodash';
import * as emotion from '../src/kfFeels';
import requireContext from 'require-context';
import { renderToStaticMarkup } from 'react-dom/server';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import KFThemeProvider from '../src/index';
import { getNodes, markNodes, getStylesFromClassNames, importAll } from './lib/process-components';
import { getClassNamesFromNodes } from './lib/utils';
import { replaceClassNames } from './lib/replace-class-names';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import writeStylesheets from './lib/write-stylesheets';
import defaultTheme from '../src/theme/defaultTheme';

configure({ adapter: new Adapter() });
// import extractStyles from './lib/extract-styles';

const componentGlob = 'src/components/*/index.js?(x)';
// const componentGlob = 'src/components/Typography/Headings/Headings.jsx';
const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<KFThemeProvider>{component}</KFThemeProvider>, rest);
const EnzymeRender = renderWithTheme(render);
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
  let styles = getStylesFromClassNames(classNames);
  const replacedClassnames = replaceClassNames(classNames, styles, '', emotion.caches.key);
  writeStylesheets(defaultTheme, replacedClassnames);
}

// eslint-disable-next-line
main().catch(console.error);
