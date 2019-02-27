import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../Logo';

['full', 'logo mark'].map((kind) => {
  ['small', 'medium', 'large'].map((size) => {
    it(`${size} ${kind} logo renders correctly`, () => {
        const tree = renderer.create(
                <Logo
                  kind={kind}
                  size={size}
                />
                ).toJSON();
          expect(tree).toMatchSnapshot();
    });
  });
});
