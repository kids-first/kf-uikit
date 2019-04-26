/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);

stories.add(
  'Avatar',
  () => {
    const variants = generateVariantsFor({
      size: [null, 19, 20, 200, 201],
      userName: [null, 'Jacob N. Ross', ''],
      userEmail: [null, 'xuzhu@d3b.center', ''],
      imgUrl: [null, 'https://www.w3schools.com/css/img_avatar.png', ''],
    });
    return (
      <section>
        <Avatar
          className="hide-in-tests"
          userName={text('User Name', 'Jacob N. Ross')}
          userEmail={text('User Email', 'xuzhu@d3b.center')}
          imgUrl={text('Profile Image URL', 'https://www.w3schools.com/css/img_avatar.png')}
          size={number('Avatar Size', 40)}
        />
        <div className="show-in-tests hidden" style={{ width: 1280 }}>
          {variants.map(props => (
            <Avatar className="m-12 float-left" {...props} />
          ))}
        </div>
      </section>
    );
  },
  {
    info: {
      text: `
        Displays user gravatar image.
        `,
    },
  },
);
