import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  BlockQuote
} from '../../src/components/Typography';
import { withInfo } from '@storybook/addon-info';
import theme from '../../src/theme/defaultTheme';
const info = (css, component) =>
  withInfo({
    text: css.replace(/;/gi, ';\n'),
    inline: true,
    header: false,
    propTypes: false
  })(component);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'Type Specimen',
  () => (
    <div>
      <H1>Heading H1</H1>
      <H2>Heading H2</H2>
      <H3>Heading H3</H3>
      <H4>Heading H4</H4>
      <H5>Heading H5</H5>
      <P>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </P>
      <hr />
      <H2 mb="0">Main Headline Goes Here</H2>
      <H5 mt="0">subhead goes here</H5>
      <P>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        <BlockQuote>
          Contingent on available funds, the DRC award is expected to provide
          funding for five years of up to a total of approximately $14.8
          million.
        </BlockQuote>
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </P>
    </div>
  )
);
storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H1',
  info(theme.h1, () => <H1>Heading H2</H1>)
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H2',
  info(theme.h2, () => <H2>Heading H2</H2>)
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H3',
  info(theme.h3, () => <H3>Heading H2</H3>)
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H4',
  info(theme.h4, () => <H4>Heading H4</H4>)
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'H5',
  info(theme.h5, () => <H5>Heading H5</H5>)
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'Paragraph',
  info(theme.paragraph, () => (
    <P>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </P>
  ))
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'BlockQuote',
  info(theme.blockquote, () => (
    <BlockQuote>
      Contingent on available funds, the DRC award is expected to provide
      funding for five years of up to a total of approximately $14.8 million.
    </BlockQuote>
  ))
);

storiesOf(`${base.replace('/stories/', '')}`, module).add(
  'text utility props',
  withInfo({
    text:
      'these are specific shorthand props that can be passed to any Typography component',
    inline: true,
    header: false
  })(() => (
    <div
      style={{ maxWidth: '50%', border: '1px solid black', padding: '10px' }}
    >
      <H4>Alignment</H4>
      <P center>center </P>
      <P left>left </P>
      <P right>right </P>
      <hr />

      <H4>Decoration</H4>
      <P underline>underline </P>
      <P clean>clean (no-decoration) </P>
      <hr />

      <H4> Case</H4>
      <P caps>Capitalize </P>
      <P upper>Upper </P>
      <P lower>lower </P>
      <hr />

      <H4> Style</H4>
      <P italic>italics </P>
      <hr />

      <H4> Size</H4>
      <P small>Small 75% </P>
    </div>
  ))
);