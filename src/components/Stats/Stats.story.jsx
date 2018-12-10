/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, boolean, text, number, select } from '@storybook/addon-knobs';
import Stats from './Stats';
import Stat from './Stat';
import iconNames from '../Icon/Icons';

const names = Object.keys(iconNames).reduce((cur, acc) => ({ [cur]: cur, ...acc }), {});
console.log(names);
const stories = storiesOf('Stats', module);

stories.add(
  'Stats Bar',
  () => (
    <Stats
      small={boolean('small', false)}
      transparent={boolean('transparent', false)}
      stats={object(
        'stats',
        [
          { icon: 'file', label: 'Files', metric: 1000 },
          { icon: 'participant', label: 'Participants', metric: 1000 },
          { icon: 'family', label: 'Families', metric: 1000 },
          { icon: 'file-size', label: 'Size', metric: 1000 },
        ],
      )}
    />
  ),
  {
    info: {
      text: `Entity Statistic Bar display a metric (count) for each passed in entity`,
    },
  },
);

stories.add(
  'Stat',
  () => (
    <Stat
      {...{
        icon: select('icon', Object.keys(iconNames)),
        label: text('lable', 'Participants'),
        metric: number('metic', 1000),
      }}
    />
  ),
  {
    info: {
      text: `Single Entity Statistic Display`,
    },
  },
);
