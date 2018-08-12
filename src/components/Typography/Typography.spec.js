/* eslint-disable */
import React from 'react';
import { createSerializer } from 'jest-emotion';
import * as emotion from '../../kfFeels/kfEmotion';
import { H1, H2, H3 } from '.';

test('H1 renders with correct styles', () => {
  const actual = create(<H1>hello world</H1>);
  expect(actual).toMatchSnapshot();
});

test('H2 renders with correct styles', () => {
  const actual = create(<H2>hello world</H2>);
  expect(actual).toMatchSnapshot();
});

test('H3 renders with correct styles', () => {
  const actual = create(
    <H3>
      hello world <H1>foobar</H1>
    </H3>,
  );
  expect(actual).toMatchSnapshot();
});
