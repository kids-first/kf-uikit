/* eslint-disable */
const createCssVarKey = (parent, prop, subProp = null) =>
  `--kf-${parent}--${prop}${subProp ? `-${subProp}` : ''}`;

// TODO: make more efficient
export const extractThemeVars = (theme, themeSections = ['colors', 'fonts']) => {
  // TODO: process complex style (ie. textStyles)
  const cssVarsMap = {};
  const cssVars = themeSections.reduce((acc, hashKey) => {
    let themeVals = theme[hashKey];
    let cssVarKey = '';
    let cssVarVal = '';
    acc = acc + `\n\n// ${hashKey.toUpperCase()} \n`;
    for (let prop in themeVals) {
      if (typeof themeVals[prop] == 'object') {
        for (let subProp in themeVals[prop]) {
          cssVarKey = createCssVarKey(hashKey, prop, subProp);
          cssVarVal = `${themeVals[prop][subProp]}`;
          acc = acc + `${cssVarKey}: ${cssVarVal}; \n`;
          cssVarsMap[cssVarKey] = cssVarVal;
        }
      } else {
        cssVarKey = cssVarKey = createCssVarKey(hashKey, prop);
        cssVarVal = `${themeVals[prop]}`;
        acc = acc + `${cssVarKey}: ${cssVarVal}; \n`;
        cssVarsMap[cssVarKey] = cssVarVal;
      }
    }
    return acc;
  }, '');

  return {
    cssVars,
    cssVarsMap,
  };
};
