import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

['default', 'small', 'large'].map((size) => {
  [true, false].map((disabled) => {
    [true, false].map((outline) => {
      ['primary', 'secondary', 'tertiary'].map((c) => {
        it(`${disabled ? 'disabled ' : ''}${size} ${c} ${outline ? 'outlined ' : ''}button renders correctly`, () => {
            const tree = renderer.create(
                    <Button
                      color={c}
                      size={size}
                      outline={outline}
                      disabled={disabled}
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
