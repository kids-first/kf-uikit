/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SecondaryNav, { NavLink } from './SecondaryNav';

const stories = storiesOf('SecondaryNav', module);

stories.addDecorator(withKnobs);

stories.add('SecondaryNav', () => (
  <SecondaryNav
    buttons={[
      <NavLink active key={1}><a href="/">Dashboard</a></NavLink>,
      <NavLink key={2}><a href="/">File Repository</a></NavLink>]}
  />
));
