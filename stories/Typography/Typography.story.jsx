import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import '../../src/tailwind.src.css';
import mediaQueryOpt from './assets/media-query-opt.gif';
import viewportOpt from './assets/viewport-opt.gif';

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

stories.add(
  'Font Sizing',
  () => (
    <div>
      <section className="container mx-auto">
        <p>
          The aim of the uikit's typographic system is to prioritize and optimize readability across
          viewport sizes while maintaining relationships and heirarchies to preserve infomation
          structures. Therefore, all <code className="bg-lightGrey text-sm p-4">font-size</code>{' '}
          values are set to{' '}
          <a href="https://www.sitepoint.com/understanding-and-using-rem-units-in-css/">rem </a>{' '}
          values instead of discrete pixel sizes. The corresponding rem to pixel values can be found
          in the table below.
        </p>
        <h3>rem to px values table</h3>
        <table className="table-fixed text-center bg-lightGrey" style={{ width: 600 }}>
          <thead>
            <tr>
              <th>viewport width</th>
              <th>media query</th>
              <th>value of 1rem</th>  
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td> &lt; 576px</td>
              <td />
              <td>14px</td>
            </tr>
            <tr className="border-b">
              <td> &lt; 768px and &gt; 576px </td>
              <td>@media (min-width: 576px) and (max-width: 768px) </td>
              <td>between 14 and 16px</td>
            </tr>
            <tr className="border-b">
              <td>&gt; 768px </td>
              <td>@media (min-width: 768px)</td>
              <td>16px</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3 className="mt-16">The Perils of Pixels</h3>
        <p>
          When <code className="bg-lightGrey text-sm p-4">font-size</code> is set to explicit values{' '}
          (ex. <code className="bg-lightGrey text-sm p-4">font-size: 16px;</code> ) it forces us
          take an adaptive approach where we must then set the font-size to a explicit value at each
          responsive breakpoint. This method renders a sub-optimal user experience as it causes
          jumps/quick snaps in font-size between breakpoints, as seen below.
        </p>
        <figure>
          <img src={mediaQueryOpt} alt="" />
          <figcaption className="block w-full text-xs text-left">
            source:{' '}
            <a href="https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/">
              Smashing Magazine
            </a>{' '}
          </figcaption>
        </figure>

        <h3 className="mt-16">Rescued by rem</h3>
        <p>
          Using the root-em, <code className="bg-lightGrey text-sm p-4">rem</code>, as our basic
          unit of measure for font-size we are able to take a truly fluid and responsive approach to
          font and spacing values. This allows us to set values in terms of percentages of 1 rem
          (ex. <code className="bg-lightGrey text-sm p-4">1rem = 14px; 0.5rem = 1/2rem = 7px;</code>
          ). By setting the rem value in our css{' '}
          <code
            className="bg-lightGrey text-sm p-4"
            dangerouslySetInnerHTML={{ __html: `:root{ }` }}
          />
          , which the top-most parent in the css cascade, we are able to leverage css'{' '}
          <code className="bg-lightGrey text-sm p-4">calc()</code>, which executes upon each browser
          resize, to fluidly adjust the rem size based on viewport width and thus proportionately
          scale all rem based values throughout our design system.
        </p>

        <h3 className="pt-16">Molten Leading Technique</h3>
        <p>
          This clever fluid scaling effect is accomplished using the css calc formula proposed by
          the
          <a
            href="https://www.madebymike.com.au/writing/precise-control-responsive-typography/"
            target="_blank"
          >
            Molten Leading technique
          </a>
          . This technique utilizes a combination of{' '}
          <code className="bg-lightGrey text-sm p-4">vw</code>(
          <a
            href="https://css-tricks.com/viewport-sized-typography/#article-header-id-1"
            target="_blank"
          >
            viewport units
          </a>
          ) range and font-size range to calculate a scaling factor for our :root rem value. This
          results in all rem defined values scaling proportionately with the viewport/browser size
          as seen below.
        </p>
        <figure>
          <img src={viewportOpt} alt="" />
          <figcaption className="block w-full text-xs text-left">
            source:{' '}
            <a href="https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/">
              Smashing Magazine
            </a>{' '}
          </figcaption>
        </figure>

        <h4 className="mt-20">Precise control over rem size</h4>
        <p>
          We don't want our font size to infinitely scale as it would then become unreasonably large
          or small. Therefore to limit the font scaling we use a combination of css
          <code className="bg-lightGrey text-sm p-4">calc()</code>
          and media queries. <br />
          <code
            className="w-full block bg-lightGrey text-sm p-4 my-12"
            dangerouslySetInnerHTML={{
              __html: `
          :root { font-size: 18px;  /* default below 600px */ } 
          <br/>
          @media (min-width: 600px){
            :root {
              font-size: 3vw;
            }
          }
          `,
            }}
          />
        </p>
        <p>
          By combining media queries and vw units we are able to get a triadic formula by which
          scale the rem value between a specific range of viewport sizes.
          <code className="w-full block bg-lightGrey font-bold p-4 text-sm">
            {' '}
            font-size: calc($min_font_px + ($max_font - $min_font) * ( (100vw - $min_width_px) / (
            $max_width - $min_width)));
          </code>
          <small>
            For a further explanation of the maths please see{' '}
            <a href="https://css-tricks.com/molten-leading-css/#comment-1601977">
              CSS Tricks: Molten Leading article
            </a>
          </small>{' '}
        </p>
        <p className="bg-lightGrey border p-12">
          To experiment with this technique in order to get a better grasp of the concepts at play
          please checkout this{' '}
          <a href="https://codepen.io/MadeByMike/pen/YPJJYv" target="_blank">
            codepen example
          </a>{' '}
          by the creator of the molten leading formula.
        </p>

        <p>
          By using the Molten Leading calculation above we get a nice smooth experience that scales
          our basic units of measure to our viewport size. This also affords us the opportunity to
          set other values such as margin and padding using rem values so that they are in proper
          porportion to our typography giving our UIs consistent vertical and horizontal rhythm.
        </p>

        <h5 className="mt-20">further reading:</h5>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.sitepoint.com/understanding-and-using-rem-units-in-css/"
            >
              Understanding and using rem units in css
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/"
            >
              Viewport units: vw, vh, vmin, vmax
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97"
            >
              CSS units for font-size: px | em | rem
            </a>
          </li>
          <li>
            <a target="_blank" href="https://codepen.io/MadeByMike/pen/YPJJYv">
              CSS Tricks: Molten Leading article
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.madebymike.com.au/writing/precise-control-responsive-typography/"
            >
              Precise control over responsive typography
            </a>
          </li>
          <li>
            <a target="_blank" href="https://trentwalton.com/2012/06/19/fluid-type/">
              Fluid Type
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/"
            >
              Fluid Responsive Typography With CSS Poly Fluid Sizing
            </a>
          </li>
        </ul>
      </section>
    </div>
  ),
  { info: { source: false } },
);

stories.add('Type Specimen', () => (
  <div className="p-12">
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
    <h2 className="mb-0 pb-4">Main Headline Goes Here</h2>
    <h5 className="mt-0 pb-8">subhead goes here</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </p>
    <ul>
      <li>Adolescent Idiopathic Scoliosis </li>
      <li>Cancer Susceptibility </li>
      <li>Congenital Diaphragmatic Hernia </li>
      <li>Craniofacial Microsomia </li>
      <li>Disorders of Sex Development </li>
      <li>Enchondromatoses </li>
      <li>Ewing Sarcoma </li>
      <li>Familial Leukemia </li>
      <li>Hearing Loss </li>
    </ul>
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
    <ol>
      <li>Register for the Kids First DRC Data Portal and complete your online profile.</li>
      <li>
        Browse and search through clinical &amp; phenotypic data in the File Repository to build a
        cohort of interest.
      </li>
      <li>
        Push your dbGaP authorized genomic files to Cavatica (or download) to begin your analysis on
        the data.
      </li>
    </ol>{' '}
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
const loremIpsum = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;

stories.add('Paragraph', () => <p className="pl-10">{text('paragraph text', loremIpsum)}</p>, {
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
      <li key={item}>{item}</li>
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
      <li key={item}>{item}</li>
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
