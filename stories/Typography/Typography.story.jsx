import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withInfo } from '../utils';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import '../../src/tailwind.src.css';

const stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.add('Fonts', () => (
  <div>
    <h1>Montserrat</h1>
    <h5 className="font-title font-light">light: 300</h5>
    <h5 className="font-title font-normal mb-10">normal: 400</h5>

    <h1 className="font-body pb-2">OpenSans</h1>
    <h5 className="font-body font-normal">normal: 400</h5>
    <h5 className="font-body font-medium">medium: 500</h5>
    <h5 className="font-body font-bold">bold: 700</h5>
  </div>
));

stories.add('Type Specimen', () => (
  <div className="p-10">
    <h1>Heading h1</h1>
    <h2>Heading H2</h2>
    <h3>Heading H3</h3>
    <h4>Heading H4</h4>
    <h5>Heading H5</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </p>
    <hr />
    <h2 className="mb-0">Main Headline Goes Here</h2>
    <h5 className="mt-0">subhead goes here</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </p>
    <uL>
      <li>Adolescent Idiopathic Scoliosis </li>
      <li>Cancer Susceptibility </li>
      <li>Congenital Diaphragmatic Hernia </li>
      <li>Craniofacial Microsomia </li>
      <li>Disorders of Sex Development </li>
      <li>Enchondromatoses </li>
      <li>Ewing Sarcoma </li>
      <li>Familial Leukemia </li>
      <li>Hearing Loss </li>
    </uL>{' '}
    <p>
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
      aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <blockquote>
      Contingent on available funds, the DRC award is expected to provide funding for five years of
      up to a total of approximately $14.8 million.
    </blockquote>
    <hr />
    <h4>Users can get started in the Kids First DRC Data Portal in three easy steps:</h4>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum.
    </p>
    <oL>
      <li>Register for the Kids First DRC Data Portal and complete your online profile.</li>
      <li>
        Browse and search through clinical &amp; phenotypic data in the File Repository to build a
        cohort of interest.
      </li>
      <li>
        Push your dbGaP authorized genomic files to Cavatica (or download) to begin your analysis on
        the data.
      </li>
    </oL>{' '}
    <p>
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
      dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
  </div>
));

// stories.add('h1', withInfo({ text: theme.h1 }, () => <h1>{text('h1 text', 'Heading h1')}</h1>));

// stories.add('H2', withInfo({ text: theme.h2 }, () => <H2>Heading H2</H2>));

// stories.add('H3', withInfo({ text: theme.h3 }, () => <H3>Heading H2</H3>));

// stories.add('H4', withInfo({ text: theme.h4 }, () => <H4>Heading H4</H4>));

// stories.add('H5', withInfo({ text: theme.h5 }, () => <H5>Heading H5</H5>));

// stories.add(
//   'Paragraph',
//   withInfo({ text: theme.paragraph }, () => (
//     <P>
//       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
//       invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
//       justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
//       ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//       eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
//       et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
//       sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
//       elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
//       diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
//       gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
//     </P>
//   )),
// );

// stories.add(
//   'BlockQuote',
//   withInfo({ text: theme.blockquote }, () => (
//     <BlockQuote>
//       Contingent on available funds, the DRC award is expected to provide funding for five years of
//       up to a total of approximately $14.8 million.
//     </BlockQuote>
//   )),
// );

// stories.add(
//   'UL',
//   withInfo({ text: theme.ul }, () => (
//     <UL>
//       {array('List Items', [
//         'Adolescent Idiopathic Scoliosis',
//         'Cancer Susceptibility',
//         'Congenital Diaphragmatic Hernia',
//         'Craniofacial Microsomia',
//         'Disorders of Sex Development',
//       ]).map(item => (
//         <li>{item}</li>
//       ))}
//     </UL>
//   )),
// );

// stories.add(
//   'OL',
//   withInfo({ text: theme.ol }, () => (
//     <OL>
//       <li>
//         Click edit underneath your name. This will bring up a box to edit your basic profile
//         information.
//       </li>
//       <li>
//         To add a profile picture, click on the button that says “Change Gravatar”. You will be
//         redirected to Wordpress &amp; Gravatar’s website to complete the profile picture set up the
//         process.
//       </li>
//       <li>
//         Once you have set up &amp; selected a profile picture within the Gravatar platform, navigate
//         back to your DRC Portal Profile and refresh the page to see your new profile picture.{' '}
//       </li>
//     </OL>
//   )),
// );

// stories.add(
//   'text utility props',
//   withInfo(
//     {
//       text: 'these are specific shorthand props that can be passed to any Typography component',
//       inline: true,
//       header: false,
//     },
//     () => (
//       <div style={{ maxWidth: '50%', border: '1px solid black', padding: '10px' }}>
//         <H4>Alignment</H4>
//         <P center>center </P>
//         <P left>left </P>
//         <P right>right </P>
//         <hr />

//         <H4>Decoration</H4>
//         <P underline>underline </P>
//         <P clean>clean (no-decoration) </P>
//         <hr />

//         <H4> Case</H4>
//         <P caps>Capitalize </P>
//         <P upper>Upper </P>
//         <P lower>lower </P>
//         <hr />

//         <H4> Style</H4>
//         <P italic>italics </P>
//         <hr />

//         <H4> Size</H4>
//         <P small>Small 75% </P>
//       </div>
//     ),
//   ),
// );
