import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import '../src/tailwind.src.css';
import gridImg from '../static/spacing_grid__4px_cells.png';

addParameters({
  backgrounds: [
    { name: 'default', value: '#fff', default: true },
    { name: '4px grid', value: `url(${gridImg}) repeat` },
  ],
});

addDecorator(
  withInfo({
    inline: true,
  }),
);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(centered);

let req = {
  logo: './src/components/Logo/Logo.story.jsx',
  typography: './stories/Typography/Typography.story.jsx',
  colors: './stories/Colors/Colors.story.jsx',
  spacing: './stories/Spacing/Spacing.story.jsx',
  layout: './src/components/Grid/Grid.story.jsx',
  icons: './src/components/Icon/Icon.story.jsx',
  buttons: './src/components/Button/Button.story.jsx',
  cards: './src/components/Card/Card.story.jsx',
  header: './src/components/Header/Header.story.jsx',
  stats: './src/components/Stats/Stats.story.jsx',
  inputText: './src/components/InputText/InputText.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);
