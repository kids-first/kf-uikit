import React from 'react';
import renderer from 'react-test-renderer';
import SecondaryNav, { NavLink } from '../SecondaryNav';

it(`secondary navigation renders correctly`, () => {
    const tree = renderer.create(
      <SecondaryNav
        buttons={[<NavLink key={1}><a href="/">Testing</a></NavLink>]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
