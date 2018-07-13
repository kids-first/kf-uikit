import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import { H1, H2 } from '../../src/components/Typography';
import { withInfo } from '@storybook/addon-info';
import theme from '../../src/theme/defaultTheme';

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H1',
  withInfo({ text: theme.h1, inline: true, header: false })(() => (
    <H2>Heading H1</H2>
  ))
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H2',
  withInfo({ text: 'foobar text here', inline: true, header: false })(() => (
    <H2>Heading H2</H2>
  ))
);
