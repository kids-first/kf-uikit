import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import Badge from '../Badge';
import * as theme from '../../../../tailwind';

const variants = generateVariantsFor({
  color: Object.keys(theme.colors),
  loading: [true, false],
  text: ['valid', 'invalid'],
});

variants.map(props => {
  it(`Badge ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<Badge {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
