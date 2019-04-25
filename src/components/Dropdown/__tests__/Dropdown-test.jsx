import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import Dropdown from '../Dropdown';
import iconNames from '../../Icon/Icons';

const variants = generateVariantsFor({
  topText: [null, '', 'Resources'],
  topIcon: [null, ...Object.keys(iconNames)],
  items: [
    [],
    [
      { value: 'Data Resource Protal', icon: 'file-size', onClick: () => {} },
      { value: 'Website', icon: 'website', onClick: () => {} },
      { value: 'Studies and Access', icon: 'study', onClick: () => {} },
      { value: 'Support', icon: 'info', onClick: () => {} },
      { value: 'Contact', icon: 'email', onClick: () => {} },
    ],
  ],
});

variants.map(props => {
  it(`Dropdown ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<Dropdown {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
