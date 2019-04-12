import React from 'react';
import { configure, getStorybook, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import createPercyAddon from '@percy-io/percy-storybook';
import '../src/tailwind.src.css';

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);


addDecorator(
  withInfo({
    inline: true,
  }),
);
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(centered);

let req = {
  logo: './src/components/Logo/Logo.story.jsx',
  typography: './stories/Typography/Typography.story.jsx',
  colors: './stories/Colors/Colors.story.jsx',
  // spacing: './stories/Spacing/Spacing.story.jsx',
  // layout: './src/components/Grid/Grid.story.jsx',
  icons: './src/components/Icon/Icon.story.jsx',
  buttons: './src/components/Button/Button.story.jsx',
  cards: './src/components/Card/Card.story.jsx',
  header: './src/components/Header/Header.story.jsx',
  stats: './src/components/Stats/Stats.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);

serializeStories(getStorybook);


