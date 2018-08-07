import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import { pick, keyBy } from 'lodash';
import colors, { gradients } from '../../src/theme/Colors';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  BlockQuote,
  UL,
  OL
} from '../../src/components/Typography';
import { Box } from '../../src/components/Layout';
import processColor from '../../src/utils/colors';
import ColorSpecimen from '../../src/components/Utilities/Color';


const hashColors = clrs => {
  return Object.keys(clrs).reduce((acc, name) => {
    return {
      ...acc,
      [name]:
        typeof clrs[name] === 'object'
          ? hashColors(clrs[name])
          : processColor(clrs[name])
    };
  }, {});
};


const brandColors = hashColors(
  pick(colors, ['primary', 'secondary', 'tertiary', 'white'])
);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Brand', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(brandColors).map(name => (
      <ColorSpecimen
        key={name}
        hex={brandColors[name].hex}
        rgba={brandColors[name].rgba}
        name={name} />
    ))}
  </div>
));


const greyScaleHash = colors.grey
  .map((hex, idx) => ({ [`grey${idx}`]: hex }))
  .reduce((acc, grey, idx) => {
    return { ...acc, [Object.keys(grey)[0]]: processColor(colors.grey[idx]) };
  }, {});

storiesOf(`${base.replace('/stories/', '')}`, module).add('GreyScale', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(greyScaleHash).map(name => (
      <ColorSpecimen
        key={name}
        hex={greyScaleHash[name].hex}
        rgba={greyScaleHash[name].rgba}
        name={name} />
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
    'error'
  ])
);

storiesOf(`${base.replace('/stories/', '')}`, module).add('States', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(stateColors).map(name => {
      if (stateColors[name].hex) {
        return (<ColorSpecimen
                  key={name}
                  hex={stateColors[name].hex}
                  rgba={stateColors[name].rgba}
                  name={name} />);
      } else {
        let nestedColors = stateColors[name];
        return (
          <Box p={1} mb={4} width="100%"
            border='1px solid'>
            <H2 width="100%">{name}</H2>
            {Object.keys(nestedColors).map(nestedName => (
              <ColorSpecimen
                  key={nestedName}
                  hex={stateColors[name][nestedName].hex}
                  rgba={stateColors[name][nestedName].rgba}
                  name={nestedName} />
            ))}
          </Box>
        );
      }
    })}
  </div>
));


const bgColorsHash = hashColors(colors.background);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Background', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(bgColorsHash).map(name => (
        <ColorSpecimen
          key={name}
          hex={bgColorsHash[name].hex}
          rgba={bgColorsHash[name].rgba}
          name={name} />
    ))}
  </div>
));

const borderColorsHash = hashColors(colors.border);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Borders', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(borderColorsHash).map(name => (
      <ColorSpecimen
        key={name}
        hex={borderColorsHash[name].hex}
        rgba={borderColorsHash[name].rgba}
        name={name} />
    ))}
  </div>
));


const GradientSwatch = ({ color, name }) => (
  <div
    name={name}
    style={{
      marginBottom: 48,
      marginRight: 48,
      width: 128 * 2
    }}
  >
    <div
      style={{
        width: 128 * 2,
        height: 128,
        backgroundImage: color,
        borderRadius: 4,
        marginBottom: 8
      }}
    />
    <H3 mb="5px" bold>
      {name}
    </H3>
    <P my="0" small>
      background-image: {color}
    </P>
  </div>
);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Gradients', () => (
  <div
    style={{
      backgroundColor: '#fcfcfc',
      width: (128+ 48) * 2,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(gradients).map(name => (
      <GradientSwatch key={name} color={gradients[name]} name={name} />
    ))}
  </div>
));
