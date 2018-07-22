import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme/defaultTheme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
addDecorator(ThemeDecorator);
addDecorator(centered);
addDecorator(withInfo);

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
