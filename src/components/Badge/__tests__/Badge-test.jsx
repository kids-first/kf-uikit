import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../Badge';

['default', 'small', 'large'].map((size) => {
  [true, false].map((outline) => {
    ['primary', 'secondary', 'tertiary', 'error', 'grey'].map((c) => {
      it(`${size} ${c} badge renders correctly`, () => {
          const tree = renderer.create(
                  <Badge
                    color={c}
                    size={size}
                  >
                    Hello
                  </Badge>
                  ).toJSON();
            expect(tree).toMatchSnapshot();
      });
    });
  });
});
