import React from 'react';
import propTypes from 'prop-types';
import { space, color, fontSize } from 'styled-system';
import chroma from 'chroma-js';
import styled from '../../src/kfFeels/kfReactEmotion';
import { H3 } from '../../src/components/Typography';
import { Paragraph } from '../../src/components/Typography/Text';
import { Box } from '../../src/components/Layout';
import { wcagGrade } from '../../src/utils/colors';

/**
 * A basic square swatch to display a color
 */
/* eslint-disable no-shadow */
const Swatch = styled('div')`
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 4px;
  margin: auto;
  background-color: ${({ color }) => color};
  ${space} ${color};
`;

Swatch.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
};

/**
 * A basic square swatch to display a gradient
 */
const GradientSwatch = styled(Swatch)`
  width: 256px;
  background-color: none;
  background-image: ${({ gradient }) => gradient};
`;
/**
 * A simple badge
 */
const Badge = styled('span')`
  border-radius: 4px;
  border-width: 1px;
  border-color: '#333';
  padding: 3px;
  margin: 5px;
  display: block;
  ${color} ${fontSize};
`;
Badge.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
};

/**
 * Displays a color swatch with its hex and rgba values along with a type
 * specimen on a badge of that color
 */

const ColorSpecimen = (
  { color, name }, // eslint-disable-line no-shadow
) => (
  <Box m={24} w={256} display="inline-block">
    <Swatch color={chroma(color).css()} />
    <H3 mb={1}>{name}</H3>
    <Paragraph mt={0} mb={0} small>
      hex: {chroma(color).hex()}
    </Paragraph>
    <Paragraph mt={0} small>
      rgb: {chroma(color).css()}
    </Paragraph>
    <Badge color="black" bg={chroma(color).css()}>
      {wcagGrade('black', color)}
    </Badge>
    <Badge color="white" bg={chroma(color).css()}>
      {wcagGrade('white', color)}
    </Badge>
  </Box>
);

ColorSpecimen.propTypes = {
  name: propTypes.string,
  color: propTypes.string,
};

ColorSpecimen.defaultProps = {
  name: 'Color',
  color: '#999',
};

/**
 * Displays a gradient swatch with title and value
 */
export const GradientSpecimen = ({ gradient, name }) => (
  <Box m={24} w={256} display="inline-block">
    <GradientSwatch gradient={gradient} />
    <H3 mb={1}>{name}</H3>
    <Paragraph mt={0} mb={0} small>
      hex: {gradient}
    </Paragraph>
  </Box>
);

GradientSpecimen.propTypes = {
  name: propTypes.string,
  gradient: propTypes.string,
};

GradientSpecimen.defaultProps = {
  name: 'Gradient',
  gradient: 'linear-gradient(to right, #fff, #000)',
};

export default ColorSpecimen;
