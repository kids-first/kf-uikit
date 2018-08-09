import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from '../../theme/defaultTheme';
import { Box } from './Layout';
import { H2 } from '../Typography';

storiesOf('Layout', module).add(
  'Box',
  withInfo({
    inline: true,
    header: false,
  })(() => (
    <div style={{ padding: 20 }}>
      <Box
        style={{
          border: `1px solid ${theme.colors.border.grey}`,
          textAlign: 'center',
        }}
      >
        <H2>BOX</H2>
      </Box>
    </div>
  )),
);
