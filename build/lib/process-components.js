/* eslint-disable */
import * as emotion from '../../src/kfFeels';
import * as css from 'css';

const REGEX_BLACK_LIST = [/__snapshots__|\.story.jsx|\.spec.js/];
export const importAll = r => {
  const filteredImportList = r
    .keys()
    .filter(
      path => !REGEX_BLACK_LIST.some(regex => regex.test(path)) && path.split('/').length === 2,
    );
  return filteredImportList.map(r);
};

export function getNodes(node, nodes = []) {
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

export function markNodes(nodes) {
  nodes.forEach(node => {
    node.withEmotionStyles = true;
  });
}

export function getStylesFromClassNames(classNames) {
  let styles = '';
  // This could be done in a more efficient way
  // but it would be a breaking change to do so
  // because it would change the ordering of styles
  Object.keys(emotion.caches.registered).forEach(className => {
    const indexOfClassName = classNames.indexOf(className);
    if (indexOfClassName !== -1) {
      const nameWithoutKey = classNames[indexOfClassName].substring(emotion.caches.key.length + 1);
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
