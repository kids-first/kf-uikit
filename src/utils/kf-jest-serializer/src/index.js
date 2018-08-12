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

export function createSerializer(emotion, { classNameReplacer, DOMElements = true } = {}) {
  function print(val, printer) {
    const nodes = getNodes(val);
    markNodes(nodes);
    const classNames = getClassNamesFromNodes(nodes);
    const styles = getStylesFromClassNames(classNames);
    const printedVal = printer(val);
    return replaceClassNames(classNames, styles, printedVal, emotion.caches.key, classNameReplacer);
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
