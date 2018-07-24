import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import { Heading } from '../../src/styles/Headings';
import { Text } from '../../src/styles/Text';


let stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.add('Example', () => (
  <div>
    <Heading.h3>The quick brown fox jumps over the lazy dog</Heading.h3>

    <Heading.h4>Lorem ipsum dolor sit amet</Heading.h4>

    <Text.p>
      Consectetur adipiscing elit. Pellentesque vel dolor sed nisl sollicitudin auctor viverra quis ipsum. Quisque et arcu eget augue tincidunt accumsan. Sed dignissim sem orci, at bibendum arcu egestas eu. In euismod sollicitudin lacus eget fermentum. Sed ut facilisis ex. Donec cursus nisl id sem lacinia, non elementum tellus efficitur. Nulla ut vehicula mi. Mauris nec egestas metus, eu suscipit leo.
    </Text.p>

    <Heading.h5>The thing of it</Heading.h5>
    <Text.ul>
      <Text.li>Bread</Text.li>
      <Text.li>Cheese</Text.li>
      <Text.li>Milk</Text.li>
    </Text.ul>

    <Text.p>
      Fusce consectetur, mi sed fringilla vehicula, neque est hendrerit eros, nec lobortis lectus ante a nisi. Nulla ex sapien, porta quis sapien ut, dignissim luctus ante. Pellentesque felis enim, maximus sed lorem sed, viverra porta eros. Commodo tellus quis, pulvinar leo. Praesent facilisis, nulla at lacinia vestibulum, nunc sem placerat leo, id vulputate leo sem vel lorem. 
    </Text.p>

    <Heading.h3>Etiam sit amet urna faucibus</Heading.h3>

    <Text.p>
      Suspendisse urna dolor, sagittis varius convallis at, commodo vel ante. Integer non convallis dui, id accumsan est. Vestibulum volutpat bibendum semper. Praesent ex nisl, mattis a nisl a, hendrerit posuere magna. Sed varius orci quis dui sollicitudin dignissim. Proin facilisis pretium diam sed porttitor. 
    </Text.p>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

stories.add('Headings', () => (
  <div>
    <Heading.h1>The quick brown fox jumps over the lazy dog</Heading.h1>
    <Heading.h2>The quick brown fox jumps over the lazy dog</Heading.h2>
    <Heading.h3>The quick brown fox jumps over the lazy dog</Heading.h3>
    <Heading.h4>The quick brown fox jumps over the lazy dog</Heading.h4>
    <Heading.h5>The quick brown fox jumps over the lazy dog</Heading.h5>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

stories.add('Copy', () => (
  <div>

    <Text.p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dolor sed nisl sollicitudin auctor viverra quis ipsum. Quisque et arcu eget augue tincidunt accumsan. Sed dignissim sem orci, at bibendum arcu egestas eu. In euismod sollicitudin lacus eget fermentum. Sed ut facilisis ex. Donec cursus nisl id sem lacinia, non elementum tellus efficitur. Nulla ut vehicula mi. Mauris nec egestas metus, eu suscipit leo. Fusce consectetur, mi sed fringilla vehicula, neque est hendrerit eros, nec lobortis lectus ante a nisi. Nulla ex sapien, porta quis sapien ut, dignissim luctus ante. Pellentesque felis enim, maximus sed lorem sed, viverra porta eros. Etiam sit amet urna faucibus, commodo tellus quis, pulvinar leo. Praesent facilisis, nulla at lacinia vestibulum, nunc sem placerat leo, id vulputate leo sem vel lorem. 
    </Text.p>

  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

stories.add('List', () => (
  <div>
    <Text.ul>
      <Text.li>Bread</Text.li>
      <Text.li>Cheese</Text.li>
      <Text.li>Milk</Text.li>
    </Text.ul>
  </div>
  ),
  { info: { inline: true, header: false, text: 'hello'} }
);

