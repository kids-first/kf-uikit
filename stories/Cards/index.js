import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../../src/components/Cards/Card';


let stories = storiesOf('Cards', module);

stories.add('Basic', () => (
  <Card title='My Card'>
    Hello
  </Card>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);
