import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatch from './Colors';

const stories = storiesOf('Colors', module);

const brand = ['primary', 'secondary', 'tertiary'];
const brandSwatches = brand.map(color => <Swatch color={color} />);
stories.add('Brand', () => (
  <div className="flex" style={{ width: 700 }}>
    {brandSwatches}
  </div>
));

const state = ['info', 'warn', 'error'];
const stateSwatches = state.map(color => <Swatch color={color} />);
stories.add('State', () => (
  <div className="flex" style={{ width: 700 }}>
    {stateSwatches}
  </div>
));

const greys = ['black', 'grey', 'white'];
const greySwatches = greys.map(color => <Swatch color={color} />);

stories.add('Greyscale', () => (
  <div className="flex" style={{ width: 700 }}>
    {greySwatches}
  </div>
));
