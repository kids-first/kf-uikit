import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatch from './Colors';
import '../../src/tailwind.src.css';

const stories = storiesOf('Colors', module);

const brand = ['primary', 'secondary', 'tertiary'];
const brandSwatches = brand.map(color => <Swatch color={color} />);
stories.add('Brand', () => (
  <div className="flex">
    {brandSwatches}
  </div>
));


const state = ['info', 'warn', 'error'];
const stateSwatches = state.map(color => <Swatch color={color} />);
stories.add('State', () => (
  <div className="flex">
    {stateSwatches}
  </div>
));


const greys = ['black', 'grey', 'white'];
const greySwatches = greys.map(color => <Swatch color={color} />);

stories.add('Greyscale', () => (
  <div className="flex">
    {greySwatches}
  </div>
));
