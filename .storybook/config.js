import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import '../src/tailwind.src.css';

addDecorator(
  withInfo({
    inline: true,
  }),
);
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(centered);

let req = {
  colors: './stories/Colors/Colors.story.jsx',
  typography: './stories/Typography/Typography.story.jsx',
  buttons: './src/components/Button/Button.story.jsx',
  logo: './src/components/Logo/Logo.story.jsx',
  cards: './src/components/Card/Card.story.jsx',
  tags: './src/components/Tag/Tag.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);
