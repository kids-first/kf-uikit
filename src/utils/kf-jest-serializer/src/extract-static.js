import { appendFile, readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';
import { invert, mapValues } from 'lodash';
import { parse as parseCSS } from 'css';

const fsAppendFile = promisify(appendFile);

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

// export const writeStaticFile = (file, content) => fsAppendFile(file, content, 'utf-8');
export const writeStaticFile = (file, content) => {
  writeFileSync(file, '', 'utf-8');
  return fsAppendFile(file, content, 'utf-8')
    .then(() => {
      const fileData = readFileSync(file, 'utf-8');
      return { file, data: fileData };
    })
    .catch(err => console.log(err));
};

const extractStatic = classNames => {
  const htmlTagRe = /(<([^>]+)>)/gi;
  // split html tag
  const classArr = classNames.split(htmlTagRe);
  // grab just the css selectors
  const selectorArr = classArr[0].split(/}/g);

  // remove added line return
  selectorArr.pop();
  // iterate through selectors
  selectorArr.forEach(slctr => {
    const {
      stylesheet: { rules: slctrRules, parsingErrors: slctrErrors },
    } = parseCSS(`${slctr}}`);
    // const ASTfile = JSON.parse(readFileSync(global.filePaths.cssAST, 'utf-8'));

    const {
      stylesheet: { rules: parsedRules, parsingErrors: parsedErrors },
    } = global.cssAST;

    // de-dup rules based on selectors
    const combinedRules = [...parsedRules, ...slctrRules].filter(
      (rule, index, self) =>
        index ===
        self.findIndex(t => JSON.stringify(t.selectors) === JSON.stringify(rule.selectors)),
    );

    const parsedAST = {
      type: 'stylesheet',
      stylesheet: {
        rules: combinedRules,
        parsingErrors: [...parsedErrors, ...slctrErrors],
      },
    };
    writeFileSync(global.filePaths.cssAST, JSON.stringify(parsedAST, null, 2), 'utf-8');
  });
};

export default extractStatic;
