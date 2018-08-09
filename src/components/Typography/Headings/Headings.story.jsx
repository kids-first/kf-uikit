import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
} from './Headings';
import { withInfo } from '../../../../stories/utils';
import theme from '../../../theme/defaultTheme';

const stories = storiesOf('Typography/Headings', module);
stories.addDecorator(withKnobs);

stories.add('H1', withInfo({ text: theme.h1 }, () => <H1>{text('H1 text', 'Heading H1')}</H1>));
stories.add('H2', withInfo({ text: theme.h2 }, () => <H2>{text('H2 text', 'Heading H2')}</H2>));
stories.add('H3', withInfo({ text: theme.h3 }, () => <H3>{text('H3 text', 'Heading H3')}</H3>));
stories.add('H4', withInfo({ text: theme.h4 }, () => <H4>{text('H4 text', 'Heading H4')}</H4>));
stories.add('H5', withInfo({ text: theme.h5 }, () => <H5>{text('H5 text', 'Heading H5')}</H5>));
