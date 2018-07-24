import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, text } from '@storybook/addon-knobs';
import { Card } from '../../src/components/Cards/Card';


let stories = storiesOf('Cards', module);

stories.add('Basic', () => (
  <Card barColor={color('Bar Color')} title={text('Title', 'My Card')}>
    {text('Body text', 'Lorem ipsum...')}
  </Card>
  )
);

