import React from 'react';
import renderer from 'react-test-renderer';
import SecondaryNav from '../SecondaryNav';
import SecondaryNavLink from '../SecondaryNavLink';

it(`secondary navigation renders correctly`, () => {
  const tree = renderer
    .create(
      <SecondaryNav
        buttons={[
          <SecondaryNavLink key={1} href="/">
            Testing
          </SecondaryNavLink>,
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
