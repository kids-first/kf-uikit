/* eslint-disable */
import React from 'react';
import * as css from 'css';
import cssscss from 'css-scss';
import { writeFileSync, readFile, readFileSync } from 'fs';
import { invert, mapValues } from 'lodash';
import { promisify } from 'util';
import { renderToStaticMarkup } from 'react-dom/server';
import 'jest-enzyme';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer, extractThemeVars } from './src/utils/kf-jest-serializer/src';
import {
  replaceWithCssVars,
  writeStaticFile,
} from './src/utils/kf-jest-serializer/src/extract-static';
// import { axe, toHaveNoViolations } from 'jest-axe';
import { create } from 'react-test-renderer';
import * as emotion from './src/kfFeels/kfEmotion';
import KFThemeProvider from './src/index';
import defaultTheme from './src/theme/defaultTheme';
const fsWriteFile = promisify(readFile);
const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<KFThemeProvider>{component}</KFThemeProvider>, rest);

const shallowWithTheme = tree => {
  const context = shallow(<KFThemeProvider />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};

const mountWithTheme = tree => {
  const context = shallow(<KFThemeProvider />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: KFThemeProvider.childContextTypes,
  });
};

global.shallow = shallowWithTheme;
global.render = renderWithTheme(render);
global.create = renderWithTheme(create);
global.mount = mountWithTheme;
global.renderToHtml = renderWithTheme(renderToStaticMarkup);

global.cssVarsMap = {};
global.cssVarsRoot = '';
global.cssAST = JSON.parse(readFileSync(process.cwd() + '/src/css/AST.json', 'utf-8'));
global.filePaths = {
  css: process.cwd() + '/src/css/kf-uikit.css',
  cssStatic: process.cwd() + '/src/css/kf-uikit-static.min.css',
  scss: process.cwd() + '/src/css/kf-uikit.scss',
  cssAST: process.cwd() + '/src/css/AST.json',
};
// global.axe = axe;

// This is defined by webpack in storybook builds using the DefinePlugin plugin.
global.STORYBOOK = false;

// Add custom matchers
// expect.extend(toHaveNoViolations);
// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className, index) {
      let BEMclass = className.split('---').pop();
      return `${BEMclass}, ${BEMclass}`;
    },
  }),
);

global.beforeAll(() => {
  console.log('beforeAll');
  global.cssVarsRoot = extractThemeVars(defaultTheme);
  // clear files
  // Object.values(global.filePaths).forEach(path => fsWriteFile(path, ''));
});

global.afterAll(() => {
  console.log('afterAll');

  // static minified css. no vars
  writeStaticFile(global.filePaths.cssStatic, css.stringify(global.cssAST))
    .then(data => {
      console.log(`WROTE ${data.file}`);
      return data.data;
    })
    .then(cssStaticData => {
      const ASTwithCSSvars = replaceWithCssVars(css.parse(cssStaticData), global.cssVarsMap);
      // css with vars
      writeFileSync(
        global.filePaths.css,
        `:root{${global.cssVarsRoot}} \n\n ${css.stringify(ASTwithCSSvars)}`,
      );
      console.log(`WROTE ${global.filePaths.css}`);
      return css.stringify(ASTwithCSSvars);
    })
    .then(cssWvars => {
      const cssFile = readFileSync(global.filePaths.css, 'utf-8');
      // scss from css vars
      writeFileSync(global.filePaths.scss, cssscss(cssFile));
      console.log(`WROTE ${global.filePaths.scss}`);
    })
    .catch(err => console.log(err));
});
