import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import { Paragraph, BlockQuote, TextList } from './Text';
import { withInfo } from '../../../../stories/utils';
import theme from '../../../theme/defaultTheme';

const stories = storiesOf('Typography/Body', module);
stories.addDecorator(withKnobs);

stories.add(
  'BlockQuote',
  withInfo({ text: theme.blockquote }, () => (
    <BlockQuote>
      Contingent on available funds, the DRC award is expected to provide funding for five years of
      up to a total of approximately $14.8 million.
    </BlockQuote>
  )),
);

stories.add(
  'Paragraph',
  withInfo({ text: theme.paragraph }, () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </Paragraph>
  )),
);

stories.add(
  'TextList.unordered',
  withInfo({ text: theme.ul }, () => (
    <TextList.unordered>
      {array('List Items', [
        'Adolescent Idiopathic Scoliosis',
        'Cancer Susceptibility',
        'Congenital Diaphragmatic Hernia',
        'Craniofacial Microsomia',
        'Disorders of Sex Development',
      ]).map(item => (
        <li>{item}</li>
      ))}
    </TextList.unordered>
  )),
);

stories.add(
  'TextList.ordered',
  withInfo({ text: theme.ol }, () => (
    <TextList.ordered>
      <li>
        Click edit underneath your name. This will bring up a box to edit your basic profile
        information.
      </li>
      <li>
        To add a profile picture, click on the button that says “Change Gravatar”. You will be
        redirected to Wordpress &amp; Gravatar’s website to complete the profile picture set up the
        process.
      </li>
      <li>
        Once you have set up &amp; selected a profile picture within the Gravatar platform, navigate
        back to your DRC Portal Profile and refresh the page to see your new profile picture.{' '}
      </li>
    </TextList.ordered>
  )),
);
