/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../Button/Button';
import Header from './Header';

const stories = storiesOf('Header', module);

stories.addDecorator(withKnobs);

stories.add('Header', () => (
  <Header
    buttons={[
      <Button>Dashboard</Button>,
      <Button outline>File Repository</Button>]}
  />
));
