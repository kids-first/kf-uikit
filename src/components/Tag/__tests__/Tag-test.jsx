import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../Tag';

['default', 'small', 'large'].map((size) => {
  [true, false].map((outline) => {
    ['primary', 'secondary', 'tertiary', 'error', 'grey'].map((c) => {
      it(`${size} ${c} badge renders correctly`, () => {
          const tree = renderer.create(
                  <Tag
                    color={c}
                    size={size}
                  >
                    Hello
                  </Tag>
                  ).toJSON();
            expect(tree).toMatchSnapshot();
      });
    });
  });
});
