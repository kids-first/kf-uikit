/* eslint-disable */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import 'jest-enzyme';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer, extractThemeVars } from './src/utils/kf-jest-serializer/src';
// import { axe, toHaveNoViolations } from 'jest-axe';
import { create } from 'react-test-renderer';
import * as emotion from './src/kfFeels/kfEmotion';
import KFThemeProvider from './src/index';

import defaultTheme from './src/theme/defaultTheme';

// const cssVarsMap = ['colors', 'fonts'].reduce((acc, x) => ({ ...acc, [x]: defaultTheme[x] }), {});

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
  extractThemeVars(defaultTheme);
  console.log(global.cssVarsMap);
});

// global.afterAll(() => {
//   console.log(global.staticCssHash);
// });
