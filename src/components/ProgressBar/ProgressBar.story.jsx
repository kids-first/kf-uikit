/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';

const stories = storiesOf('ProgressBars', module);

stories.add('Simple ProgressBar', () => (
  <ProgressBar
    color={select('Color', ['primary', 'secondary', 'tertiary', 'info'], 'primary')}
    current={number('Current', 30)}
    total={number('Total', 100)}
  >
    Click Me
  </ProgressBar>
  ),
  {
		info: {
      text: `
        The progress bar should be used to shown a percentage complete or
        available.
        `
    },
  }
)
