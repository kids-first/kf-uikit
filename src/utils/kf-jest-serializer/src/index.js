/* eslint-disable */
import { writeFileSync } from 'fs';
import * as css from 'css';
import { replaceClassNames } from './replace-class-names';
import { getClassNamesFromNodes, isReactElement, isDOMElement } from './utils';
export { createMatchers } from './matchers';

function getNodes(node, nodes = []) {
  if (node.children) {
    for (let child of node.children) {
      getNodes(child, nodes);
    }
  }

  if (typeof node === 'object') {
    nodes.push(node);
  }

  return nodes;
}

export function getStyles(emotion) {
  return Object.keys(emotion.caches.inserted).reduce((style, current) => {
    if (emotion.caches.inserted[current] === true) {
      return style;
    }
    return style + emotion.caches.inserted[current];
  }, '');
}

function writeStatic(classHash) {
  const classDeclarations = Object.values(classHash);
  // concat classes
  const declrsString = classDeclarations.join(' \n\n');

  writeFileSync(process.cwd() + '/src/css/kf-uikit.css', declrsString, function(err) {
    if (err) throw err;
    console.log(`Saved ${classDeclarations.length} css declarations!`);
  });
}

function createStatic(classNames) {
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
      global.staticCssHash[selector] = _slctr.replace('\n\n', '') + '}';
    }
    // TODO: definitely don't leave this in a loop,
    // only write when all has been added to the global.staticCssHash
    writeStatic(global.staticCssHash);
  });
}

export function createSerializer(emotion, { classNameReplacer, DOMElements = true } = {}) {
  function print(val, printer) {
    const nodes = getNodes(val);
    markNodes(nodes);
    const classNames = getClassNamesFromNodes(nodes);
    const styles = getStylesFromClassNames(classNames);
    const printedVal = printer(val);
    const replacedClassnames = replaceClassNames(
      classNames,
      styles,
      printedVal,
      emotion.caches.key,
      classNameReplacer,
    );

    createStatic(replacedClassnames);

    // console.log(replacedClassnames.split(htmlTagRe)[0]);
    // appendFile(
    //   process.cwd() + '/src/css/kf-uikit.css',
    //   replacedClassnames.split(htmlTagRe)[0],
    //   function(err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   },
    // );

    return replacedClassnames;
  }

  function test(val) {
    return (
      val &&
      !val.withEmotionStyles &&
      (DOMElements ? isReactElement(val) || isDOMElement(val) : isReactElement(val))
    );
  }

  function markNodes(nodes) {
    nodes.forEach(node => {
      node.withEmotionStyles = true;
    });
  }

  function getStylesFromClassNames(classNames) {
    let styles = '';
    // This could be done in a more efficient way
    // but it would be a breaking change to do so
    // because it would change the ordering of styles
    Object.keys(emotion.caches.registered).forEach(className => {
      let indexOfClassName = classNames.indexOf(className);
      if (indexOfClassName !== -1) {
        let nameWithoutKey = classNames[indexOfClassName].substring(emotion.caches.key.length + 1);
        // $FlowFixMe
        styles += emotion.caches.inserted[nameWithoutKey];
      }
    });
    let prettyStyles;
    try {
      prettyStyles = css.stringify(css.parse(styles));
    } catch (e) {
      console.error(e);
      throw new Error(`There was an error parsing css in jest-emotion: "${styles}"`);
    }
    return prettyStyles;
  }

  return { test, print };
}
