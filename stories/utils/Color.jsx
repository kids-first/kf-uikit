import React from "react";
import propTypes from "prop-types";
import { space, color, fontSize } from 'styled-system';
import chroma from 'chroma-js';
import styled from '../../src/kfFeels/kfReactEmotion';
import {
  H3,
  P,
} from '../../src/components/Typography';
import { Box } from '../../src/components/Layout';
import { wcagGrade } from '../../src/utils/colors';

/**
 * A basic square swatch to display a color
 */
const Swatch = styled('div')`
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 4px;
  margin: auto;
  background-color: ${props => props.color};
  ${space}
  ${color}
`

Swatch.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}

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
  ${color}
  ${fontSize}
`
Badge.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}


/**
 * Displays a color swatch with its hex and rgba values along with a type
 * specimen on a badge of that color
 */
const ColorSpecimen = (props) => (
  <Box m={24} w={128} display="inline-block">
    <Swatch color={chroma(props.color).css()}/>
    <H3 mb={1}>{ props.name }</H3>
    <P mt={0} mb={0} small>
      hex: {chroma(props.color).hex()}
    </P>
    <P mt={0} small>
      rgb: {chroma(props.color).css()}
    </P>
    <Badge color='black' bg={chroma(props.color).css()}>{wcagGrade('black', props.color)}</Badge>
    <Badge color='white' bg={chroma(props.color).css()}>{wcagGrade('white', props.color)}</Badge>
  </Box>
)

ColorSpecimen.propTypes = {
  name: propTypes.string,
  color: propTypes.string,
}

ColorSpecimen.defaultProps = {
  name: 'Color',
  color: '#999',
}


export default ColorSpecimen;
