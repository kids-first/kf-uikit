/* eslint-disable */
import React from 'react';
import * as css from 'css';
import cssscss from 'css-scss';

import { writeFileSync, readFileSync } from 'fs';
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

Enzyme.configure({ adapter: new Adapter() });

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
global.staticCssHash = {};
global.cssVarsMap = {};
global.cssAST = {
  type: 'stylesheet',
  stylesheet: {
    rules: [],
    parsingErrors: [],
  },
};
global.filePaths = {
  css: process.cwd() + '/src/css/kf-uikit.css',
  cssStatic: process.cwd() + '/src/css/kf-uikit-static.min.css',
  scss: process.cwd() + '/src/css/kf-uikit.scss',
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
  writeFileSync(global.filePaths.css, '');
  extractThemeVars(defaultTheme);
});

global.afterAll(() => {
  // static minified css. no vars
  writeFileSync(global.filePaths.cssStatic, css.stringify(global.cssAST, { compress: true }));
  // write static css file from AST w/ css vars
  const AST_W_Vars = replaceWithCssVars(global.cssAST, global.cssVarsMap);
  const staticCss = writeStaticFile(
    global.filePaths.css,
    css.stringify(AST_W_Vars, { compress: true }),
  );
  staticCss.then(() => {
    // write scss from css w/ css vars file
    const cssFile = readFileSync(global.filePaths.css);
    writeFileSync(global.filePaths.scss, cssscss(cssFile));
  });
});
