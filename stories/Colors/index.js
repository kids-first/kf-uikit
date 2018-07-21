import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwatchDisplay } from '../../src/components/Utils/Swatches';
import theme from '../../src/theme/defaultTheme';


let stories = storiesOf('Color swatches', module);

stories.add('Brand', () => (
  <div>
    {['primary','secondary','tertiary'].map(name => (
      <SwatchDisplay key={name} name={name} color={theme.colors[name]}/>
    ))}
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

stories.add('States', () => (
  <div>
    {['info','warn','error'].map(name => (
      <SwatchDisplay key={name} name={name} color={theme.colors[name]}/>
    ))}
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);
