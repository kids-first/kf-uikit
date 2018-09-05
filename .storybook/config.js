import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import '../src/tailwind.src.css';

addDecorator(withInfo({
	inline: true,
}));
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(centered);

let req = {
  colors: './stories/Colors/Colors.story.jsx',
  buttons: './src/components/Button/Button.story.jsx',
};
const storyReqs = require.context('../', true, /^.*\.story\.jsx$/);

function loadStories() {
  Object.values(req).forEach(filename => storyReqs(filename));
}

configure(loadStories, module);
