/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {  number } from '@storybook/addon-knobs';
import Icon from './Icon';
import paths from './Icons';

const stories = storiesOf('Icons', module);

stories.add('Icons', () => (
  <ul className="w-full max-w-full">
    {Object.keys(paths).map((icon) => (
      <li className="inline-block text-center w-1/4">
        <div className="w-full">
          <Icon
            width={number('Size', 24)}
            height={number('Size', 24)}
            key={icon}
            kind={icon}
          />
        </div>
        <span className="w-full">{icon}</span>
      </li>
    ))}
  </ul>
));
