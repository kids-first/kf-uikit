/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import Button from './Button';
import iconNames from '../Icon/Icons';

const stories = storiesOf('Buttons', module);

stories.add(
  'Button',
  () => {
    const variants = generateVariantsFor({
      size: ['default', 'large'],
      color: ['default', 'primary', 'secondary'],
      disabled: [true, false],
      icon: [null, Object.keys(iconNames)[0]],
    });
    return (
      <section>
        <Button
          className="hide-in-tests"
          size={select('Size', ['default', 'large'], 'default')}
          color={select('Color', ['default', 'primary', 'secondary'], 'default')}
          disabled={boolean('Disabled', false)}
          type="button"
          icon={select('icon', [null, ...Object.keys(iconNames)], null)}
        >
          Click Me
        </Button>
        {process.env.STORYBOOK_PERCY_ENV ? (
          <div>
            {variants.map(props => (
              <Button className="m-20" {...props}>
                Button&nbsp;
                {Object.values(props).join(' ')}
              </Button>
            ))}
          </div>
        ) : null}
      </section>
    );
  },
  {
    info: {
      text: `
        The standard action button for most use cases in the portal.
        `,
    },
  },
);
