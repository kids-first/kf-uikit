/* eslint-disable */
import React from 'react';
import { createSerializer } from 'jest-emotion';
import { renderToStaticMarkup } from 'react-dom/server';
import 'jest-enzyme';
import { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { axe, toHaveNoViolations } from 'jest-axe';
import { create } from 'react-test-renderer';
import * as emotion from './src/kfFeels/kfEmotion';
import KFThemeProvider from './src/index';

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
