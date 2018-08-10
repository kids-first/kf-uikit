/* eslint-disable */
import React from 'react';
import { H1, H2 } from '.';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';
import styled from 'react-emotion';

test('H1 renders with correct styles', () => {
  const actual = create(<H1>hello world</H1>);
  expect(actual).toMatchSnapshot();
});

test('H2 renders with correct styles', () => {
  const actual = create(<H2>hello world</H2>);
  expect(actual).toMatchSnapshot();
});
