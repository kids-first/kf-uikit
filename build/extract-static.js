/* eslint-disable */
import React from 'react';
// import { format } from 'prettier';
import { flattenDeep, filter, mapValues } from 'lodash';
import listFiles from './lib/list-files';
import glob from 'glob';
import requireContext from 'require-context';
import { renderToStaticMarkup } from 'react-dom/server';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import KFThemeProvider from '../src/index';
import { create } from 'react-test-renderer';
import { H1 } from '../src/components/Typography';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// import extractStyles from './lib/extract-styles';

const componentGlob = 'src/components/*/index.js?(x)';
// const componentGlob = 'src/components/Typography/Headings/Headings.jsx';
const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<KFThemeProvider>{component}</KFThemeProvider>, rest);
const EnzymeRender = renderWithTheme(render);
const EnzymeCreate = renderWithTheme(create);

const REGEX_BLACK_LIST = [/__snapshots__|\.story.jsx|\.spec.js/];
const importAll = r => {
  const filteredImportList = r
    .keys()
    .filter(
      path => !REGEX_BLACK_LIST.some(regex => regex.test(path)) && path.split('/').length === 2,
    );
  return filteredImportList.map(r);
};
const { error } = console;
// eslint-disable-next-line no-console
console.error = (arg1, ...rest) => {
  const isStringMsg = typeof arg1 === 'string';
  const regex = /.*prop.+as required|Invalid prop/;
  const isPropTypesRequiredError = isStringMsg && regex.test(arg1);
  if (isPropTypesRequiredError) {
    return;
  }
  error(arg1, ...rest);
};

async function main() {
  // let componentPaths = await listFiles(componentGlob);

  const comps = importAll(requireContext('../../src/components', true, /index\.js/));

  const filterComps = c =>
    filter(c, 'contextTypes').reduce(
      (acc, comp) => ({
        ...acc,
        [comp.displayName]: comp,
      }),
      {},
    );
  const flatComps = flattenDeep(comps)
    .map(c => filterComps(c))
    .reduce((acc, compHash) => ({ ...acc, ...compHash }), {});
  const renderedComps = mapValues(flatComps, c => EnzymeCreate(React.createElement(c)).toJSON());
  console.log(renderedComps);
  // console.log(EnzymeCreate(React.createElement(comps[0].H1)).toJSON());

  // const componentData = await Promise.all(componentPaths.map(parseComponent));
  // const allStyles = await Promise.all(componentData.map(extractStyles));

  // console.log(format(allStyles.join('\n'), { parser: 'css' }));
}

// eslint-disable-next-line
main().catch(console.error);
