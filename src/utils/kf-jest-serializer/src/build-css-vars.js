/* eslint-disable */
import { appendFile } from 'fs';
import { isArray } from 'lodash';

const createCssVarKey = (parent, prop, subProp = null) =>
  `--kf-${parent}--${prop}${subProp ? '-' + subProp : ''}`;

const addToGlobalHash = (key, val) => {
  global.cssVarsMap[key] = val;
};

// TODO: make more efficient
export const extractThemeVars = theme => {
  const cssVars = ['colors', 'fonts'].reduce((acc, hashKey) => {
    let themeVals = theme[hashKey];
    let _cssVarKey = '';
    let _cssVarVal = '';
    acc = acc + `\n\n// ${hashKey.toUpperCase()} \n`;
    for (let prop in themeVals) {
      if (typeof themeVals[prop] == 'object') {
        for (let subProp in themeVals[prop]) {
          _cssVarKey = createCssVarKey(hashKey, prop, subProp);
          _cssVarVal = `${themeVals[prop][subProp]}`;
          addToGlobalHash(_cssVarKey, _cssVarVal);
          acc = acc + `${_cssVarKey}: ${_cssVarVal}; \n`;
        }
      } else {
        _cssVarKey = _cssVarKey = createCssVarKey(hashKey, prop);
        _cssVarVal = `${themeVals[prop]}`;
        addToGlobalHash(_cssVarKey, _cssVarVal);
        acc = acc + `${_cssVarKey}: ${_cssVarVal}; \n`;
      }
    }

    return acc;
  }, '');
  return cssVars;
};
