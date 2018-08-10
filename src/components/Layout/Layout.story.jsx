import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Box } from './Layout';
import { H2 } from '../Typography';

storiesOf('Layout', module).add(
  'Box',
  withInfo({
    text: `
      Use boxes to space components
    `,
    inline: true,
    header: false,
  })(() => (
    <Box border='1px solid' textAlign='center'>
      <H2>BOX</H2>
    </Box>
  )),
);
