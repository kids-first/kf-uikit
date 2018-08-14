import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { checkA11y } from '@storybook/addon-a11y';
import theme from '../src/theme/defaultTheme';

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

addDecorator(ThemeDecorator);
addDecorator(checkA11y);

let req = {
  colors: './stories/Colors/Colors.story.jsx',
  typography: './src/components/Typography/Typography.story.jsx',
  typographyHeadings: './src/components/Typography/Headings/Headings.story.jsx',
  typographyText: './src/components/Typography/Text/Text.story.jsx',
  layout: './src/components/Layout/Layout.story.jsx',
  buttons: './src/components/Buttons/Buttons.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);
