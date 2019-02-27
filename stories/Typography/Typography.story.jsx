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

stories.add('h1', () => <h1>{text('h1 text', 'Heading h1')}</h1>);
stories.add('h2', () => <h2>{text('h2 text', 'Heading h2')}</h2>);
stories.add('h3', () => <h3>{text('h3 text', 'Heading h3')}</h3>);
stories.add('h4', () => <h4>{text('h4 text', 'Heading h4')}</h4>);
stories.add('h5', () => <h5>{text('h5 text', 'Heading h5')}</h5>);
let loremIpsum = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;

stories.add('Paragraph', () => <p class="pl-10">{text('paragraph text', loremIpsum)}</p>, {
  info: {
    text: `In order to preserve optimal readability paragraph line length is capped at around 45-75 characters (30em) including spaces and punctuation.
    This spacing is set to be fluid and adjust according to viewport width calculations based on recommendations from https://css-tricks.com/molten-leading-css/`,
  },
});

stories.add('Blockquote', () => (
  <blockquote>
    {text(
      'quote',
      `Contingent on available funds, the DRC award is expected to provide funding for five years of up
    to a total of approximately $14.8 million.`,
    )}
  </blockquote>
));

stories.add('un-ordered list', () => (
  <ul>
    {array('List Items', [
      'Adolescent Idiopathic Scoliosis',
      'Cancer Susceptibility',
      'Congenital Diaphragmatic Hernia',
      'Craniofacial Microsomia',
      'Disorders of Sex Development',
    ]).map(item => (
      <li>{item}</li>
    ))}
  </ul>
));

stories.add('ordered list', () => (
  <ol>
    {array('List Items', [
      'Click edit underneath your name. This will bring up a box to edit your basic profile information.',
      'To add a profile picture, click on the button that says “Change Gravatar”. You will be redirected to Wordpress &amp; Gravatar’s website to complete the profile picture set up the process.',
      'Once you have set up &amp; selected a profile picture within the Gravatar platform, navigate back to your DRC Portal Profile and refresh the page to see your new profile picture.',
    ]).map(item => (
      <li>{item}</li>
    ))}
  </ol>
));

stories.add('horizontal rule', () => (
  <div>
    <p>{loremIpsum.slice(0, 200)}</p>
    <hr />
    <p>{loremIpsum.slice(0, 250)}</p>
    <hr />
    <p>{loremIpsum}</p>
  </div>
));
