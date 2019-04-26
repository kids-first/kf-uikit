/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import Dropdown from './Dropdown';
import Icon from '../Icon/Icon';

const stories = storiesOf('Dropdown', module);

stories.add(
  'Dropdown',
  () => {
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
    });
    return (
      <section>
        <Dropdown className="hide-in-tests" items={items} open={boolean('Open', false)}>
          <span>
            <Icon className="mr-12" width={16} height={16} kind="resources" />
            {text('Dropdown Label', 'Resources')}
          </span>
        </Dropdown>
        {process.env.STORYBOOK_PERCY_ENV ? (
          <div className="show-in-tests" style={{ width: 1280 }}>
            {variants.map(props => (
              <div className="float-left m-20" style={{ height: 300, width: '25%' }}>
                <Dropdown {...props}>
                  <span>
                    <Icon className="mr-12" width={16} height={16} kind="resources" />
                    resources
                  </span>
                </Dropdown>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    );
  },
  {
    info: {
      text: `
        Displays dropdown menu
        `,
    },
  },
);
