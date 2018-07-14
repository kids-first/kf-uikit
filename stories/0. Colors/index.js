import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import { pick, keyBy } from 'lodash';
import colors from '../../src/theme/Colors';
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
import { processColor } from '../../src/utils';

const SWATCH_WIDTH = 100;

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

const info = (css, component) =>
  withInfo({
    text: css.replace(/;/gi, ';\n'),
    inline: true,
    header: false
  })(component);

const Badge = ({ children, filled, style }) => (
  <div
    style={{
      borderRadius: 4,
      backgroundColor: filled ? colors.grey[1] : 'transparent',
      paddingLeft: 8,
      paddingRight: 8,
      borderWidth: 1,
      borderColor: '#333',
      fontFamily: 'OpenSans',
      ...style
    }}
  >
    <P
      style={{
        color: filled ? '#fff' : '#333',
        fontFamily: 'OpenSans'
      }}
      small
    >
      {children}
    </P>
  </div>
);

export default Badge;

const AccessibilityBadge = ({ level }) => {
  let text;
  switch (true) {
    case level.aaa:
      text = 'AAA';
      break;
    case level.aa:
      text = 'AA';
      break;
    case level.aaLarge:
      text = 'AA Large';
      break;
    default:
      text = null;
  }
  return text && <Badge filled>{text}</Badge>;
};

const Swatch = ({ color, name }) => (
  <div
    name={name}
    style={{
      marginBottom: 48,
      marginRight: 48,
      width: SWATCH_WIDTH
    }}
  >
    <div
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color.hex,
        borderRadius: 4,
        marginBottom: 8
      }}
    />
    <H3 mb="5px" bold>
      {name}
    </H3>
    <P my="0" small>
      hex: {color.hex}
    </P>
    <P my="0" small>
      rgba({color.rgba.map(
        (val, i, arr) => `${val}${i !== arr.length - 1 ? ',' : ''}`
      )})
    </P>
    <AccessibilityBadge level={color.accessibility} />
  </div>
);

const brandColors = hashColors(
  pick(colors, ['primary', 'secondary', 'tertiary', 'white'])
);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Brand', () => (
  <div
    style={{
      backgroundColor: '#fcfcfc',
      padding: 30,
      width: (SWATCH_WIDTH + 48) * 4,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(brandColors).map(name => (
      <Swatch key={name} color={brandColors[name]} name={name} />
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
      padding: 30,
      width: (SWATCH_WIDTH + 48) * 4,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(greyScaleHash).map(name => (
      <Swatch key={name} color={greyScaleHash[name]} name={name} />
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
      backgroundColor: '#fcfcfc',
      padding: 30,
      width: (SWATCH_WIDTH + 48) * 4,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(stateColors).map(name => {
      if (stateColors[name].hex) {
        return <Swatch key={name} color={stateColors[name]} name={name} />;
      } else {
        let nestedColors = stateColors[name];
        return (
          <div
            style={{
              border: `1px solid ${colors.border.grey}`,
              padding: '0 20px',
              marginBottom: 10,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row'
            }}
          >
            <H2 width="100%">{name}</H2>
            {Object.keys(nestedColors).map(nestedName => (
              <Swatch
                key={nestedName}
                color={stateColors[name][nestedName]}
                name={nestedName}
              />
            ))}
          </div>
        );
      }
    })}
  </div>
));

const bgColorsHash = hashColors(colors.background);
storiesOf(`${base.replace('/stories/', '')}`, module).add('Background', () => (
  <div
    style={{
      padding: 30,
      width: (SWATCH_WIDTH + 48) * 4,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}
  >
    {Object.keys(bgColorsHash).map(name => (
      <Swatch key={name} color={bgColorsHash[name]} name={name} />
    ))}
  </div>
));
