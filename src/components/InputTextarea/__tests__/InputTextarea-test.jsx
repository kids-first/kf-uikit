import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import InputTextarea from '../InputTextarea';

const variants = generateVariantsFor({
  fieldLabel: ['', 'label'],
  fieldName: ['', 'name'],
  placeholder: [null, '', 'placeholder'],
  required: [null, true, false],
  error: [null, '', 'error'],
  maxLength: [null, 10],
  inputCount: [null, true, false],
});

variants.map(props => {
  it(`Dropdown ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<InputTextarea {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
