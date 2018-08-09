import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
} from './Typography';
import { Paragraph, BlockQuote, TextList } from './Text';
import { withInfo } from '../../../stories/utils';

const stories = storiesOf('Typography', module);

stories.add(
  'Fonts',
  withInfo(
    {
      text: `
      Fonts are imported from Google Fonts using
      ~~~html
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Open+Sans:400,500,700"
  rel="stylesheet">
      ~~~
      or
      ~~~js
      @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400|Open+Sans:400,500,700');

      ~~~
    `,
      inline: true,
      header: false,
      source: false,
    },
    () => (
      <div>
        <H2 mb="0">Montserrat (headings)</H2>
        <H2 small fontWeight="thin">
          {' '}
          thin: 300
        </H2>
        <H2 mt="0" small fontWeight="regular">
          {' '}
          regular: 400
        </H2>
        <H2 mb="0" mt="10" fontFamily="body" css="font-family: Open Sans;">
          Open Sans (body)
        </H2>
        <H2 small fontWeight="thin" css="font-family: Open Sans;">
          {' '}
          regular: 400
        </H2>
        <H2 small fontWeight="normal" css="font-family: Open Sans;">
          {' '}
          normal: 500
        </H2>
        <H2 mt="0" small fontWeight="bold" css="font-family: Open Sans;">
          {' '}
          bold: 700
        </H2>
      </div>
    ),
  ),
);

stories.add(
  'Type Specimen',
  withInfo({ inline: false }, () => (
    <div>
      <H1>Heading H1</H1>
      <H2>Heading H2</H2>
      <H3>Heading H3</H3>
      <H4>Heading H4</H4>
      <H5>Heading H5</H5>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet.
      </Paragraph>
      <hr />
      <H2 mb="0">Main Headline Goes Here</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet.
        <TextList.unordered>
          <li>Adolescent Idiopathic Scoliosis </li>
          <li>Cancer Susceptibility </li>
          <li>Congenital Diaphragmatic Hernia </li>
          <li>Craniofacial Microsomia </li>
          <li>Disorders of Sex Development </li>
          <li>Enchondromatoses </li>
          <li>Ewing Sarcoma </li>
          <li>Familial Leukemia </li>
          <li>Hearing Loss </li>
        </TextList.unordered>
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Paragraph>
      <BlockQuote>
        Contingent on available funds, the DRC award is expected to provide funding for five years
        of up to a total of approximately $14.8 million.
      </BlockQuote>
      <hr />
      <H4>Users can get started in the Kids First DRC Data Portal in three easy steps:</H4>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        <TextList.ordered>
          <li>Register for the Kids First DRC Data Portal and complete your online profile.</li>
          <li>
            Browse and search through clinical &amp; phenotypic data in the File Repository to build
            a cohort of interest.
          </li>
          <li>
            Push your dbGaP authorized genomic files to Cavatica (or download) to begin your
            analysis on the data.
          </li>
        </TextList.ordered>
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet.
      </Paragraph>
    </div>
  )),
);

