/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

const stories = storiesOf('Buttons', module);

stories.add('Default Button', () => (
  <Button
    size={select('Size', ['default', 'large'], 'default')}
    color={select('Color', ['default', 'primary', 'secondary'], 'default')}
    disabled={boolean('Disabled', false)}
    type='button'
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
        The standard action button for most use cases in the portal.
        `
    },
  }
)


stories.add('Primary Button', () => (
  <Button
    size={select('Size', ['default', 'large'], 'default')}
    color={select('Color', ['default', 'primary', 'secondary'], 'primary')}
    disabled={boolean('Disabled', false)}
    type='button'
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
        To call attention to an action on a form, or highlight the strongest calls to action on a page.
        `
    },
  }
)


stories.add('Secondary Button', () => (
  <Button
    size={select('Size', ['default', 'large'], 'default')}
    color={select('Color', ['default', 'primary', 'secondary'], 'secondary')}
    disabled={boolean('Disabled', false)}
    type='button'
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
        Used sparingly for contrast from the primary buttons and an action to emphasize the most (usually contains an icon).
        `
    },
  }
)


stories.add('Disabled Button', () => (
  <Button
    size={select('Size', ['default', 'large'], 'default')}
    color={select('Color', ['default', 'primary', 'secondary'], 'default')}
    disabled={boolean('Disabled', true)}
    type='button'
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
        Used when another action has to be completed before the button is usable.
        `
    },
  }
)

stories.add('Large Button', () => (
  <Button
    size={select('Size', ['default', 'large'], 'large')}
    color={select('Color', ['default', 'primary', 'secondary'], 'default')}
    disabled={boolean('Disabled', false)}
    type='button'
  >
    Click Me
  </Button>
  ),
  {
		info: {
      text: `
        Buttons can have larger padding but default padding is used for most use cases. Large buttons are usually used to navigate to another page, should open in the current window unless the destination is an external site. 
        `
    },
  }
)
