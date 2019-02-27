/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Card from './Card';

const stories = storiesOf('Cards', module);

stories.add('Simple Card', () => (
  <Card title={text('title', 'A very very long card title lorem ipsum dolor')}>
    <p> Lorem ipsum </p>
  </Card>
));

stories.add('Many Cards', () => (
  <div className="flex">
    <Card className="flex-1" title="Card 1">
      <p> Lorem ipsum </p>
    </Card>
    <Card className="flex-1" title="Card 2">
      <p> Lorem ipsum </p>
    </Card>
  </div>
));
