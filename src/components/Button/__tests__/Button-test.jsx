import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

['button', 'submit'].map((type) => {
  ['default', 'large'].map((size) => {
    [true, false].map((disabled) => {
      ['default', 'primary', 'secondary'].map((c) => {
        it(`${disabled ? 'disabled ' : ''}${size} ${c} ${type}}button renders correctly`, () => {
            const tree = renderer.create(
                    <Button
                      color={c}
                      size={size}
                      disabled={disabled}
                      type={type}
                    >
                      Hello
                    </Button>
                    ).toJSON();
              expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
