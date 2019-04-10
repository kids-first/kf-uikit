import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatch from './Colors';

const stories = storiesOf('Colors', module);
const storyInfo = {
  info: {
    text: `hover hex value to see rgb value`,
    source: false,
  },
};

const brand = ['blue', 'purple', 'teal', 'lightBlue', 'lightGrey', 'darkGrey'];
const brandSwatches = brand.map(color => <Swatch color={color} />);
stories.add('Primary', () => <div className="flex flex-wrap">{brandSwatches}</div>, storyInfo);

const secondary = ['pink', 'red', 'orange', 'mediumGrey'];
const secondarySwatches = secondary.map(color => <Swatch color={color} />);
stories.add(
  'Secondary',
  () => <div className="flex flex-wrap">{secondarySwatches}</div>,
  storyInfo,
);
