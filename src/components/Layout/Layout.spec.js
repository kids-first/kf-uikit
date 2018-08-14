/* eslint-disable */
import React from 'react';
import { Box, Flex } from '.';

test('Box renders with correct styles', () => {
  const actual = create(<Box />);
  expect(actual).toMatchSnapshot();
});

test('Flex renders with correct styles', () => {
  const actual = create(<Flex />);
  expect(actual).toMatchSnapshot();
});
