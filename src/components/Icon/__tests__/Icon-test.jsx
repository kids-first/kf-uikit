import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';
import paths from '../Icons';

Object.keys(paths).map((kind) => {
  it(`${kind} Icon renders correctly`, () => {
      const tree = renderer.create(
              <Icon kind={kind} />
              ).toJSON();
      expect(tree).toMatchSnapshot();
  });
});
