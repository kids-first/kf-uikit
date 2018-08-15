/* eslint-disable */
import { mapValues, invert } from 'lodash';
function defaultClassNameReplacer(className, index) {
  let BEMclass = className.split('---').pop();
  return `${BEMclass}, ${BEMclass}`;
}

const componentSelectorClassNamePattern = /^e[a-zA-Z0-9]+[0-9]+$/;

export const replaceClassNames = (
  classNames,
  styles,
  code,
  key,
  replacer = defaultClassNameReplacer,
) => {
  let index = 0;

  return classNames.reduce((acc, className) => {
    if (className.indexOf(`${key}-`) === 0 || componentSelectorClassNamePattern.test(className)) {
      const escapedRegex = new RegExp(className.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g');
      return acc.replace(escapedRegex, replacer(className, index++));
    }
    return acc;
  }, `${styles}${styles ? '\n\n' : ''}${code}`);
};

export const replaceWithCssVars = (cssAST, cssVarsMap) => {
  const stylesAST = cssAST;
  const cssVarsHash = cssVarsMap;
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
      const declr = _decl;
      const declVal = declr.value.includes(',')
        ? declr.value
            .split(',')
            .map(x => x.trim())
            .join(',')
        : declr.value;

      const cssVar = invert(cssVariableMap)[declVal];
      declr.value = cssVar ? `var(${cssVar})` : declr.value;
      return declr;
    });
  });

  return stylesAST;
};
