import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import { Card } from '../../src/components/Cards/Card';


let stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

stories.add('Basic', () => (
  <Card barColor={color('Bar Color')} title={text('Title', 'My Card')}>
    {text('Body text', 'Lorem ipsum...')}
  </Card>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

