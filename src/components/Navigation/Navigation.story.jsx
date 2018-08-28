/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../Button/Button';
import Navigation from './Navigation';

const stories = storiesOf('Navigation', module);

stories.addDecorator(withKnobs);

stories.add('Header Navigation', () => (
  <Navigation
    buttons={[
      <Button>Dashboard</Button>,
      <Button outline>File Repository</Button>]}
  />
));
