import * as css from 'css';
import cssscss from 'css-scss';
import writeStaticFile from './write-file';
import pkg from '../../package.json';
import { extractThemeVars } from './build-css-vars';
import { replaceWithCssVars } from './replace-class-names';

function stylesheet(strings) {
  // We can even return a string built using a template literal
  return `${process.cwd()}/src/styles/kf-uikit--${pkg.version}.${strings}`;
}
const filePaths = {
  cssStatic: stylesheet`min.css`,
  css: stylesheet`css`,
  scss: stylesheet`scss`,
};

const writeStylesheets = (theme, cssString, compress = false) => {
  const { cssVarsMap, cssVars: cssRoot } = extractThemeVars(theme);
  const cssCompiled = compress ? cssString.replace(/\n/gim, '') : cssString;
  // save our AST to a file just to have it
  writeStaticFile(
    `${process.cwd()}/src/styles/.kf-uikit-css-ast.json`,
    JSON.stringify(css.parse(cssCompiled), null, 2),
  );
  // static minified css. no vars
  return writeStaticFile(filePaths.cssStatic, cssCompiled)
    .then(data => {
      console.log(`WROTE ${data.file}`);
      return data.data;
    })
    .then(cssStaticData => {
      // CSS w/ variables AST
      const CSSVarsAST = replaceWithCssVars(css.parse(cssStaticData), cssVarsMap);
      // css with vars
      return writeStaticFile(
        filePaths.css,
        `:root{${
          compress ? cssRoot.replace(/\/\/.*/g, '').replace(/\n/gim, '') : cssRoot
        }} \n\n ${css.stringify(CSSVarsAST, {
          compress,
        })}`,
      );
    })
    .then(data => {
      console.log(`WROTE ${data.file}`);
      // scss from css vars
      return writeStaticFile(
        filePaths.scss,
        cssscss(compress ? data.data.replace(/\n/gim, '') : data.data),
      );
    })
    .then(data => {
      console.log(`WROTE ${data.file}`);
    })
    .catch(err => console.log(err));
};

export default writeStylesheets;
