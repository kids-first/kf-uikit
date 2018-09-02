/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

const stories = storiesOf('Buttons', module);

stories.add('Simple Button', () => (
  <Button
    size={select('Size', ['small', 'default', 'large'], 'default')}
    color={select('Color', ['primary', 'secondary', 'tertiary', 'info'], 'primary')}
    outline={boolean('Outline', false)}
    disabled={boolean('Disabled', false)}
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
          Button presence should be alterered by modifying, in decreasing
          order, \`size\`, \`color\`, and \`outline\` properties.
        `
    },
  }
)
