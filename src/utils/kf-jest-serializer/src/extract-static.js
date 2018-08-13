/* eslint-disable */
import { writeFile } from 'fs';
import { promisify } from 'util';
import { invert, uniq, mapValues } from 'lodash';
import { parse as parseCSS, stringify as stringifyCSS } from 'css';
const fs_writeFile = promisify(writeFile);

export const replaceWithCssVars = (cssAST, cssVarsMap) => {
  const stylesAST = Object.assign({}, cssAST);
  const cssVarsHash = Object.assign({}, cssVarsMap);
  const {
    stylesheet: { rules },
  } = stylesAST;

  // remove extraneous spaces from values
  const cssVariableMap = mapValues(
    cssVarsHash,
    val =>
      val.includes(',')
        ? val
            .split(',')
            .map(x => x.trim())
            .join(',')
        : val,
  );

  rules.map(({ declarations: decls }) => {
    return decls.map(_decl => {
      let declVal = _decl.value.includes(',')
        ? _decl.value
            .split(',')
            .map(x => x.trim())
            .join(',')
        : _decl.value;

      let cssVar = invert(cssVariableMap)[declVal];
      _decl.value = cssVar ? `var(${cssVar})` : _decl.value;
      return _decl;
    });
  });

  return stylesAST;
};

const writeStatic = (file, content) => fs_writeFile(file, content, 'utf-8');

const extractStatic = classNames => {
  var htmlTagRe = /(<([^>]+)>)/gi;
  // split html tag
  const classArr = classNames.split(htmlTagRe);
  // grab just the css selectors
  const selectorArr = classArr[0].split(/}/g);
  // remove added line return
  selectorArr.pop();
  // iterate through selectors
  selectorArr.forEach(_slctr => {
    const {
      stylesheet: { rules: _slctrRules, parsingErrors: _slctrErrors },
    } = parseCSS(_slctr + '}');

    const {
      stylesheet: { rules: parsedRules, parsingErrors: parsedErrors },
    } = global.cssAST;

    global.cssAST = {
      type: 'stylesheet',
      stylesheet: {
        rules: uniq([...parsedRules, ..._slctrRules]),
        parsingErrors: [...parsedErrors, ..._slctrErrors],
      },
    };

    // add to global for deduplication
    // if (!global.staticCssHash.hasOwnProperty(selector)) {
    //   console.log(invert(global.cssVarsMap));
    //   _slctr = replaceWithCssVars(_slctr, invert(global.cssVarsMap));

    //   global.staticCssHash[selector] = _slctr.replace('\n\n', '') + '}';
    // }
    // TODO: definitely don't leave this in a loop,
    // only write when all has been added to the global.staticCssHash
    // writeStatic(global.staticCssHash);
  });

  const cssFile = writeStatic(
    process.cwd() + '/src/css/kf-css.css',
    stringifyCSS(replaceWithCssVars(global.cssAST, global.cssVarsMap)),
  );
};

export default extractStatic;
