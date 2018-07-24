import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import { Heading } from '../../src/styles/Headings';


let stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.add('Headings', () => (
  <div>
    <Heading.h1>The quick brown fox jumps over the lazy dog</Heading.h1>
    <Heading.h2>The quick brown fox jumps over the lazy dog</Heading.h2>
    <Heading.h3>The quick brown fox jumps over the lazy dog</Heading.h3>
    <Heading.h4>The quick brown fox jumps over the lazy dog</Heading.h4>
    <Heading.h5>The quick brown fox jumps over the lazy dog</Heading.h5>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

