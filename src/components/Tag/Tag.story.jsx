/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Tag from './Tag';

const stories = storiesOf('Tags', module);

stories.add('Simple Tag', () => (
  <Tag
    size={select('Size', ['small', 'default', 'large'], 'default')}
    color={select('Color', ['primary', 'secondary', 'tertiary', 'error', 'grey'], 'grey')}
  >
    {text('Text', '10,567')}
  </Tag>
  ),
  {
		info: {
      text: `
        Used to show a numeric stat or icon.
        `
    },
  }
)
