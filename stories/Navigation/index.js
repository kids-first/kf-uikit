import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import { TopNav } from '../../src/components/Navigation/TopNav';


let stories = storiesOf('Navigation', module);
stories.addDecorator(withKnobs);

stories.add('Top Navigation', () => (
  <TopNav barColor={color('Bar Color')}>
  </TopNav>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

