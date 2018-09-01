/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

const stories = storiesOf('Buttons', module);

stories.add('Simple Button', () => (
  <Button
    outline={boolean('Outline', false)}
    disabled={boolean('Disabled', false)}
    color={select('Color', ['primary', 'secondary', 'tertiary', 'info'], 'primary')}
  >
    Click Me
  </Button>
));
