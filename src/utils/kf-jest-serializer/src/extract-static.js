/* eslint-disable */
import { writeFileSync } from 'fs';
import { invert, escapeRegExp } from 'lodash';

const replaceWithCssVars = (str, mapObj) => {
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gim');
  return str.replace(re, function(matched) {
    return `var(${mapObj[matched]})`;
  });
};

function writeStatic(classHash) {
  const classDeclarations = Object.values(classHash);
  // concat classes
  const declrsString = classDeclarations.join(' \n\n');

  writeFileSync(process.cwd() + '/src/css/kf-uikit.css', declrsString, function(err) {
    if (err) throw err;
    console.log(`Saved ${classDeclarations.length} css declarations!`);
  });
}

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
    // clean up selector
    const selector = _slctr
      .trim()
      .substr(0, classArr[0].indexOf('{'))
      .trim();
    // add to global for deduplication
    if (!global.staticCssHash.hasOwnProperty(selector)) {
      console.log(invert(global.cssVarsMap));
      _slctr = replaceWithCssVars(_slctr, invert(global.cssVarsMap));

      global.staticCssHash[selector] = _slctr.replace('\n\n', '') + '}';
    }
    // TODO: definitely don't leave this in a loop,
    // only write when all has been added to the global.staticCssHash
    writeStatic(global.staticCssHash);
  });
};

export default extractStatic;
