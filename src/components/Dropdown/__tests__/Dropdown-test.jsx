import React from 'react';
import renderer from 'react-test-renderer';
import { toPairs } from 'lodash';
import { generateVariantsFor } from '../../../utils/propsVariants';
import Dropdown from '../Dropdown';
import Icon from '../../Icon/Icon';

const items = [
  {
    value: 'Data Resource Protal',
    icon: 'file-size',
    onClick: e => {
      e.preventDefault();
    },
    type: 'button',
  },
  {
    value: 'Website',
    icon: 'website',
    onClick: e => {
      e.preventDefault();
    },
    type: 'button',
  },
  {
    value: 'Studies and Access',
    icon: 'study',
    onClick: e => {
      e.preventDefault();
    },
    type: 'button',
  },
  {
    value: 'Support',
    icon: 'info',
    onClick: e => {
      e.preventDefault();
    },
    type: 'button',
  },
  {
    value: 'Contact',
    icon: 'email',
    onClick: e => {
      e.preventDefault();
    },
    type: 'link',
    href: '/',
  },
];
const variants = generateVariantsFor({
  items: [[], items],
  open: [true, false, null],
  children: [
    <span>
      <Icon className="mr-12" width={16} height={16} kind="resources" />
      resources
    </span>,
    'Foobar no comp',
  ],
});

variants.map(props => {
  it(`Dropdown ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
    const tree = renderer.create(<Dropdown {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
