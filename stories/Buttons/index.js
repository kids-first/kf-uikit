import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import { Button } from '../../src/styles/Buttons';


let stories = storiesOf('Buttons', module);

stories.add('Button Styles', () => (
  <div>
    <Button>
      Click Me
    </Button>

    <Button kind='info'>
      Click Me
    </Button>

    <Button kind='warn'>
      Click Me
    </Button>

    <br />

    <Button disabled>
      Click Me
    </Button>

    <Button disabled kind='info'>
      Click Me
    </Button>

    <Button disabled kind='warn'>
      Click Me
    </Button>

    <br />

    <Button outline>
      Click Me
    </Button>

    <Button outline kind='info'>
      Click Me
    </Button>

    <Button outline kind='warn'>
      Click Me
    </Button>

    <br />

    <Button outline disabled>
      Click Me
    </Button>

    <Button outline disabled kind='info'>
      Click Me
    </Button>

    <Button outline disabled kind='warn'>
      Click Me
    </Button>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

stories.add('Sizes', () => (
  <div>
    <Button size='small'>
      Click Me
    </Button>

    <Button>
      Click Me
    </Button>

    <Button size='large'>
      Click Me
    </Button>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);
