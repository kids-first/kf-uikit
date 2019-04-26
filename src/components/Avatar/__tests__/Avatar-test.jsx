import React from 'react';
import renderer from 'react-test-renderer';
import { generateVariantsFor } from '../../../utils/propsVariants';
import { toPairs } from 'lodash';
import Avatar from '../Avatar';

const variants = generateVariantsFor({
  size: [null, 19, 20, 200, 201],
  userName: [null, 'Jacob N. Ross', ''],
  userEmail: [null, 'xuzhu@d3b.center', ''],
  imgUrl: [null, 'https://www.w3schools.com/css/img_avatar.png', ''],
});

variants.map(props => {
  it(`Avatar ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<Avatar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
