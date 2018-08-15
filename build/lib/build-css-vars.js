/* eslint-disable */
import { isArray } from 'lodash';

const createCssVarKey = (parent, prop, subProp = null) =>
  `--kf-${parent}--${prop}${subProp ? '-' + subProp : ''}`;

const addToGlobalHash = (key, val) => {
  global.cssVarsMap[key] = val;
};

// TODO: make more efficient
export const extractThemeVars = (theme, themeSections = ['colors', 'fonts']) => {
  // TODO: process complex style (ie. textStyles)
  const cssVarsMap = {};
  const cssVars = themeSections.reduce((acc, hashKey) => {
    let themeVals = theme[hashKey];
    let _cssVarKey = '';
    let _cssVarVal = '';
    acc = acc + `\n\n// ${hashKey.toUpperCase()} \n`;
    for (let prop in themeVals) {
      if (typeof themeVals[prop] == 'object') {
        for (let subProp in themeVals[prop]) {
          _cssVarKey = createCssVarKey(hashKey, prop, subProp);
          _cssVarVal = `${themeVals[prop][subProp]}`;
          acc = acc + `${_cssVarKey}: ${_cssVarVal}; \n`;
          cssVarsMap[_cssVarKey] = _cssVarVal;
        }
      } else {
        _cssVarKey = _cssVarKey = createCssVarKey(hashKey, prop);
        _cssVarVal = `${themeVals[prop]}`;
        acc = acc + `${_cssVarKey}: ${_cssVarVal}; \n`;
        cssVarsMap[_cssVarKey] = _cssVarVal;
      }
    }
    return acc;
  }, '');

  return {
    cssVars,
    cssVarsMap,
  };
};
