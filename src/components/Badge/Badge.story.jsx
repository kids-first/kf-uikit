/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Badge from './Badge';

const stories = storiesOf('Badges', module);

stories.add('Simple Badge', () => (
  <Badge
    size={select('Size', ['small', 'default', 'large'], 'default')}
    color={select('Color', ['primary', 'secondary', 'tertiary', 'error', 'grey'], 'grey')}
  >
    {text('Text', '10,567')}
  </Badge>
  ),
  {
		info: {
      text: `
        Used to show a numeric stat or icon.
        `
    },
  }
)
