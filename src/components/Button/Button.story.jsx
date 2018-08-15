import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '../../../stories/utils';
import { Button } from './Button';
import './../index';


const stories = storiesOf('Buttons', module);

stories.add(
  'Simple Buttons',
  () => (
    <div>
      <Button size={'small'}>Click Me</Button>
      <Button>Click Me</Button>
      <Button size={'big'}>Click Me</Button>

      <Button color={'secondary'} size={'small'}>Click Me</Button>
      <Button color={'secondary'}>Click Me</Button>
      <Button color={'secondary'} size={'big'}>Click Me</Button>

      <Button color={'tertiary'} size={'small'}>Click Me</Button>
      <Button color={'tertiary'}>Click Me</Button>
      <Button color={'tertiary'} size={'big'}>Click Me</Button>

      <Button size={'small'} disabled>Click Me</Button>
      <Button disabled>Click Me</Button>
      <Button size={'big'} disabled>Click Me</Button>
    </div>
  ),
);
