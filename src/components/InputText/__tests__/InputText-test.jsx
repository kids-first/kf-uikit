import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import InputText from '../InputText';

const inputType = [
  'date',
  'datetime-local',
  'month',
  'number',
  'password',
  'search',
  'text',
  'time',
  'week',
];
const variants = generateVariantsFor({
  fieldLabel: ['', 'label'],
  fieldName: ['', 'name'],
  type: [null, ...inputType],
  placeholder: [null, '', 'placeholder'],
  required: [null, true, false],
  disabled: [null, true, false],
  error: [null, '', 'error'],
  prefix: [null, '', 'prefix'],
  suffix: [null, '', 'suffix'],
});

variants.map(props => {
  it(`Dropdown ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<InputText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
