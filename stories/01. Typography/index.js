import React from "react";
import { storiesOf } from "@storybook/react";
import base from "paths.macro";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  BlockQuote,
  UL,
  OL
} from "../../src/components/Typography";
import { withInfo } from "../utils";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import theme from "../../src/theme/defaultTheme";

const stories = storiesOf(`${base.replace("/stories/", "")}`, module);
stories.addDecorator(withKnobs);

stories.add(
  "Fonts",
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
      source: false
    },
    () => (
      <div>
        <H1 mb="0">Montserrat</H1>
        <H1 my="0" small fontWeight="300">
          {" "}
          thin: 300
        </H1>
        <H1 mt="0" small fontWeight="400">
          {" "}
          regular: 400
        </H1>
        <H1 mb="0" fontFamily="OpenSans">
          OpenSans
        </H1>
        <H1 my="0" small fontWeight="400" fontFamily="OpenSans">
          {" "}
          regular: 400
        </H1>
        <H1 my="0" small fontWeight="500" fontFamily="OpenSans">
          {" "}
          normal: 500
        </H1>
        <H1 mt="0" small fontWeight="700" fontFamily="OpenSans">
          {" "}
          bold: 700
        </H1>
      </div>
    )
  )
);

stories.add("Type Specimen", () => (
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
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet.
      <UL>
        <li>Adolescent Idiopathic Scoliosis </li>
        <li>Cancer Susceptibility </li>
        <li>Congenital Diaphragmatic Hernia </li>
        <li>Craniofacial Microsomia </li>
        <li>Disorders of Sex Development </li>
        <li>Enchondromatoses </li>
        <li>Ewing Sarcoma </li>
        <li>Familial Leukemia </li>
        <li>Hearing Loss </li>
      </UL>{" "}
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
      sea takimata sanctus est Lorem ipsum dolor sit amet.
    </P>
    <BlockQuote>
      Contingent on available funds, the DRC award is expected to provide
      funding for five years of up to a total of approximately $14.8 million.
    </BlockQuote>
    <hr />
    <H4>
      Users can get started in the Kids First DRC Data Portal in three easy
      steps:
    </H4>
    <P>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      <OL>
        <li>
          Register for the Kids First DRC Data Portal and complete your online
          profile.
        </li>
        <li>
          Browse and search through clinical &amp; phenotypic data in the File
          Repository to build a cohort of interest.
        </li>
        <li>
          Push your dbGaP authorized genomic files to Cavatica (or download) to
          begin your analysis on the data.
        </li>
      </OL>{" "}
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </P>
  </div>
));

stories.add(
  "H1",
  withInfo({ text: theme.h1 }, () => <H1>{text("H1 text", "Heading H1")}</H1>)
);

stories.add("H2", withInfo({ text: theme.h2 }, () => <H2>Heading H2</H2>));

stories.add("H3", withInfo({ text: theme.h3 }, () => <H3>Heading H2</H3>));

stories.add("H4", withInfo({ text: theme.h4 }, () => <H4>Heading H4</H4>));

stories.add("H5", withInfo({ text: theme.h5 }, () => <H5>Heading H5</H5>));

stories.add(
  "Paragraph",
  withInfo({ text: theme.paragraph }, () => (
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

stories.add(
  "BlockQuote",
  withInfo({ text: theme.blockquote }, () => (
    <BlockQuote>
      Contingent on available funds, the DRC award is expected to provide
      funding for five years of up to a total of approximately $14.8 million.
    </BlockQuote>
  ))
);

stories.add(
  "UL",
  withInfo({ text: theme.ul }, () => (
    <UL>
      {array("List Items", [
        "Adolescent Idiopathic Scoliosis",
        "Cancer Susceptibility",
        "Congenital Diaphragmatic Hernia",
        "Craniofacial Microsomia",
        "Disorders of Sex Development"
      ]).map(item => <li>{item}</li>)}
    </UL>
  ))
);

stories.add(
  "OL",
  withInfo({ text: theme.ol }, () => (
    <OL>
      <li>
        Click edit underneath your name. This will bring up a box to edit your
        basic profile information.
      </li>
      <li>
        To add a profile picture, click on the button that says “Change
        Gravatar”. You will be redirected to Wordpress &amp; Gravatar’s website
        to complete the profile picture set up the process.
      </li>
      <li>
        Once you have set up &amp; selected a profile picture within the
        Gravatar platform, navigate back to your DRC Portal Profile and refresh
        the page to see your new profile picture.{" "}
      </li>
    </OL>
  ))
);

stories.add(
  "text utility props",
  withInfo(
    {
      text:
        "these are specific shorthand props that can be passed to any Typography component",
      inline: true,
      header: false
    },
    () => (
      <div
        style={{ maxWidth: "50%", border: "1px solid black", padding: "10px" }}
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
    )
  )
);
