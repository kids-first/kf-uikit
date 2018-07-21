import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme/defaultTheme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
addDecorator(ThemeDecorator);
addDecorator(withInfo);

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
