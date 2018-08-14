/* eslint-disable */
import React from 'react';
import styled from '../../kfFeels/kfReactEmotion';
import { css } from '../../kfFeels/kfEmotion';
import { H1, H2, H3, Paragraph, TextList } from '.';
import { Box } from '../Layout/Layout';

test('H1 renders with correct styles', () => {
  const actual = create(<H1>Heading H1</H1>);
  expect(actual).toMatchSnapshot();
});

test('H2 renders with correct styles', () => {
  const actual = create(<H2>Heading H2</H2>);
  expect(actual).toMatchSnapshot();
});

test('H3 renders with correct styles', () => {
  const actual = create(<H3>Heading H3</H3>);
  expect(actual).toMatchSnapshot();
});

test('Paragraph renders with correct styles', () => {
  const actual = create(
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
    </Paragraph>,
  );
  expect(actual).toMatchSnapshot();
});
