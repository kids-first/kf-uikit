/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import SecondaryNav from './SecondaryNav';
import SecondaryNavLink from './SecondaryNavLink';

const stories = storiesOf('SecondaryNav', module);

stories.addDecorator(withKnobs);

stories.add(
  'SecondaryNav',
  () => {
    const navList = array('Array of Tab Name', ['Tab1', 'Tab2', 'Tab3']);
    return (
      <div className="percy-min-width">
        <SecondaryNav
          buttons={navList.map(i => (
            <SecondaryNavLink
              key={i}
              active={navList.indexOf(i) === 0}
              onNavClick={e => {
                e.preventDefault();
              }}
              href="/"
            >
              {i}
            </SecondaryNavLink>
          ))}
        />
      </div>
    );
  },
  {
    info: {
      text: `
        The secondary nav is typically displayed below the primary navigation
        at the header of the site.
          `,
    },
  },
);
