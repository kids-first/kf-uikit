/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Logo from './Logo';

const stories = storiesOf('Branding', module);

stories.add('Logo', () => (
  <Logo
    kind={select('Kind', ['logo mark', 'full'], 'full')}
  />
  ),
  {
    info: {
      text: `Fluid logo that scales up to a width of the small viewport 
        breakpoint, or the full height of it container.`
    }
  }
)
