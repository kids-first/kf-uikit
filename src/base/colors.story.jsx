import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '../../stories/utils';
import './index.scss';


const stories = storiesOf('Colors', module);

stories.add(
  'Background Colors',
  () => (
    <div>
      <div className="bg-primary text-white">primary</div>
      <div className="bg-secondary text-white">secondary</div>
      <div className="bg-tertiary text-white">tertiary</div>
      <div className="bg-info">info</div>
      <div className="bg-error">error</div>
      <div className="bg-warn">warn</div>
    </div>
  ),
);

stories.add(
  'Text Colors',
  () => (
    <div>
      <div className="bg-white text-primary">primary</div>
      <div className="bg-white text-secondary">secondary</div>
      <div className="bg-white text-tertiary">tertiary</div>
      <div className="text-info">info</div>
      <div className="text-error">error</div>
      <div className="text-warn">warn</div>
    </div>
  ),
);
