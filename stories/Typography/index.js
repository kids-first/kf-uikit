import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';

import { H1 } from '../../src/components/Typography';

storiesOf(`${base.replace('/stories/', '')}`, module).add('Headings', () => (
  <H1>Heading H1</H1>
));
