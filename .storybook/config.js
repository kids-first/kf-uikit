import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(checkA11y);

let req = {
  typography: './src/base/typography.story.jsx',
  colors: './src/base/colors.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);
