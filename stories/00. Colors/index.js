import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import { pick } from 'lodash';
import colors from '../../src/theme/Colors';
import { H2 } from '../../src/components/Typography';
import { Box } from '../../src/components/Layout';
import { hashColors, processColor } from '../../src/utils/colors';
import ColorSpecimen, { GradientSpecimen } from '../utils/Color';
const uikitStories = storiesOf(`${base.replace('/stories/', '')}`, module);
const brandColors = hashColors(
  pick(colors, ['primary', 'secondary', 'tertiary', 'white']),
);

uikitStories.add('Brand', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(brandColors).map(name => (
      <ColorSpecimen key={name} color={brandColors[name].hex} name={name} />
    ))}
  </div>
));

const greyScaleHash = colors.grey
  .map((hex, idx) => ({ [`grey${idx}`]: hex }))
  .reduce((acc, grey, idx) => {
    return { ...acc, [Object.keys(grey)[0]]: processColor(colors.grey[idx]) };
  }, {});

uikitStories.add('GreyScale', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(greyScaleHash).map(name => (
      <ColorSpecimen key={name} color={greyScaleHash[name].hex} name={name} />
    ))}
  </div>
));

const stateColors = hashColors(
  pick(colors, [
    'highlight',
    'active',
    'inactive',
    'optionSelected',
    'hover',
    'error',
  ]),
);

uikitStories.add('States', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(stateColors).map(name => {
      if (stateColors[name].hex) {
        return (
          <ColorSpecimen key={name} color={stateColors[name].hex} name={name} />
        );
      } else {
        let nestedColors = stateColors[name];
        return (
          <Box p={1} mb={4} width="100%" border="1px solid">
            <H2 width="100%">{name}</H2>
            {Object.keys(nestedColors).map(nestedName => (
              <ColorSpecimen
                key={nestedName}
                color={stateColors[name][nestedName].hex}
                rgba={stateColors[name][nestedName].rgba}
                name={nestedName}
              />
            ))}
          </Box>
        );
      }
    })}
  </div>
));

const bgColorsHash = hashColors(colors.background);
uikitStories.add('Background', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(bgColorsHash).map(name => (
      <ColorSpecimen
        key={name}
        color={bgColorsHash[name].hex}
        rgba={bgColorsHash[name].rgba}
        name={name}
      />
    ))}
  </div>
));

const borderColorsHash = hashColors(colors.border);
uikitStories.add('Borders', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(borderColorsHash).map(name => (
      <ColorSpecimen
        key={name}
        color={borderColorsHash[name].hex}
        rgba={borderColorsHash[name].rgba}
        name={name}
      />
    ))}
  </div>
));

uikitStories.add('Gradients', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(colors.gradient).map(name => (
      <div>
        <GradientSpecimen
          key={name}
          gradient={colors.gradient[name]}
          name={name}
        />
      </div>
    ))}
  </div>
));
