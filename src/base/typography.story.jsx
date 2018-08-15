import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '../../stories/utils';
import './index.scss';


const stories = storiesOf('Typography', module);

stories.add(
  'Headings',
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
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
      </div>
    ),
  ),
);

stories.add('Body',
  () => (
      <div>
        <p>Numquam suscipit suscipit aspernatur in vel delectus. Eligendi corporis eligendi cum placeat et non aut in. Harum dicta dolor id sit aut odit. Qui in placeat ut ut.

Quia illum quis necessitatibus dolore illo maxime similique facilis. Alias vero rerum iste. Est rerum voluptas consequatur commodi sunt aut consequatur. Rerum saepe magni ipsa voluptas delectus. Harum et necessitatibus qui quos aut sit. Quia culpa hic aliquam ea voluptatem rerum alias quae.</p>
      </div>
  ),
);
