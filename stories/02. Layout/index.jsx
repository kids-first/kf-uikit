import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import base from 'paths.macro';
import theme from '../../src/theme/defaultTheme';
import { Box } from '../../src/components/Layout';
import { H2 } from '../../src/components/Typography';

storiesOf(`${base.replace('/stories/', '')}`, module).add(
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
