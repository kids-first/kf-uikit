import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';

it(`navigation renders correctly`, () => {
    const tree = renderer.create(
      <Navigation />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
