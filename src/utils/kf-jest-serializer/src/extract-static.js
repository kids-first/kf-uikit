/* eslint-disable */
import { writeFile, appendFile } from 'fs';
import { promisify } from 'util';
import { invert, uniqBy, mapValues, difference } from 'lodash';
import { parse as parseCSS, stringify as stringifyCSS } from 'css';
const fs_writeFile = promisify(appendFile);

export const replaceWithCssVars = (cssAST, cssVarsMap) => {
  const stylesAST = global.cssAST;
  const cssVarsHash = global.cssVarsMap;
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

export const writeStaticFile = (file, content) => fs_writeFile(file, content, 'utf-8');

const extractStatic = classNames => {
  var htmlTagRe = /(<([^>]+)>)/gi;
  // split html tag
  const classArr = classNames.split(htmlTagRe);
  // grab just the css selectors
  const selectorArr = classArr[0].split(/}/g);
  // remove added line return
  selectorArr.pop();
  // iterate through selectors
  selectorArr.forEach((_slctr, idx) => {
    const {
      stylesheet: { rules: _slctrRules, parsingErrors: _slctrErrors },
    } = parseCSS(_slctr + '}');

    const {
      stylesheet: { rules: parsedRules, parsingErrors: parsedErrors },
    } = global.cssAST;

    // de-dup rules based on selectors
    const combinedRules = [...parsedRules, ..._slctrRules].filter(
      (rule, index, self) =>
        index ===
        self.findIndex(t => JSON.stringify(t.selectors) === JSON.stringify(rule.selectors)),
    );

    global.cssAST = {
      type: 'stylesheet',
      stylesheet: {
        rules: combinedRules,
        parsingErrors: [...parsedErrors, ..._slctrErrors],
      },
    };
  });
};

export default extractStatic;
