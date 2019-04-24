/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import Badge from './Badge';
import * as theme from '../../../tailwind';

const stories = storiesOf('Badges', module);

stories.add(
  'Default Badge',
  () => {
    const variants = generateVariantsFor({
      color: Object.keys(theme.colors),
      loading: [true, false],
      text: ['valid', 'invalid'],
    });
    return (
      <section>
        <Badge
          className="hide-in-tests"
          text={text('Badge Text', 'New')}
          color={select('Badge Color', Object.keys(theme.colors), 'blue')}
          loading={boolean('Loading', false)}
        />
        <div className="show-in-tests hidden">
          {variants.map(props => (
            <Badge className="percy-min-width" {...props} />
          ))}
        </div>
      </section>
    );
  },
  {
    info: {
      text: `
        Displays badge for labels and stats.
        `,
    },
  },
);
