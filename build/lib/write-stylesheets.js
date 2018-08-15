/* eslint-disable */
import { parse as parseCSS } from 'css';
import * as css from 'css';
import { writeStaticFile } from './write-file';
import pkg from '../../package.json';
import { extractThemeVars } from '../lib/build-css-vars';
import { replaceWithCssVars } from '../lib/replace-class-names';
import cssscss from 'css-scss';

function stylesheet(strings) {
  // We can even return a string built using a template literal
  return `${process.cwd()}/src/styles/kf-uikit--${pkg.version}.${strings}`;
}
const filePaths = {
  cssStatic: stylesheet`min.css`,
  css: stylesheet`css`,
  scss: stylesheet`scss`,
};

const writeStylesheets = (theme, cssString) => {
  const { cssVarsMap, cssVars: cssRoot } = extractThemeVars(theme);
  // static minified css. no vars
  writeStaticFile(filePaths.cssStatic, cssString)
    .then(data => {
      console.log(`WROTE ${data.file}`);
      return data.data;
    })
    .then(cssStaticData => {
      // CSS w/ variables AST
      const CSSVarsAST = replaceWithCssVars(css.parse(cssStaticData), cssVarsMap);
      // css with vars
      return writeStaticFile(filePaths.css, `:root{${cssRoot}} \n\n ${css.stringify(CSSVarsAST)}`);
    })
    .then(data => {
      console.log(`WROTE ${data.file}`);
      // scss from css vars
      return writeStaticFile(filePaths.scss, cssscss(data.data));
    })
    .then(data => {
      console.log(`WROTE ${data.file}`);
    })
    .catch(err => console.log(err));
};

export default writeStylesheets;
