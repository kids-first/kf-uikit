import React from 'react';
import { H1, H2 } from '.';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';
import styled from 'react-emotion';

// it('should render with default styles', () => {
//   const actual = create(<H2>Heading H2</H2>);
//   expect(actual).toMatchSnapshot();
// });

// expect.addSnapshotSerializer(createSerializer(emotion));

test('renders with correct styles', () => {
  // const H1 = styled('h1')`
  //   float: left;
  //   ${({ theme }) => theme.h1u};
  // `;
  const tree = create(<H1>hello world</H1>);

  expect(tree).toMatchSnapshot();
});

test('renders with correct styles for H2', () => {
  // const H1 = styled('h1')`
  //   float: left;
  //   ${({ theme }) => theme.h1u};
  // `;
  const tree = create(<H2>hello world</H2>);

  expect(tree).toMatchSnapshot();
});
