import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import Button from '../Button';
import iconNames from '../../Icon/Icons';

const variants = generateVariantsFor({
  size: ['default', 'large'],
  color: ['default', 'primary', 'secondary'],
  disabled: [true, false],
  type: ['button', 'submit'],
  icon: [null, ...Object.keys(iconNames)],
});

variants.map(props => {
  it(`Button ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<Button {...props}>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
