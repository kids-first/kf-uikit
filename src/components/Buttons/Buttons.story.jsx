import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Box } from '../Layout';
import { Button } from './Buttons';

storiesOf('Buttons', module).add(
  'Button',
  withInfo({
    inline: true,
    header: false,
  })(() => (
    <Box p={2}>
      <Button variant='info'>Press me</Button>
    </Box>
  )),
);
