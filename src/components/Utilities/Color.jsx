import React from "react";
import propTypes from "prop-types";
import { space, color, fontSize } from 'styled-system';
import styled from '../../kfFeels/kfReactEmotion';
import {
  H3,
  P,
} from '../Typography';
import { Box } from '../Layout';

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
    <Swatch color={props.hex}/>
    <H3 mb={1}>{ props.name }</H3>
    <P mt={0} mb={0} small>
      hex: {props.hex}
    </P>
    <P mt={0} small>
      rgba: {props.rgba}
    </P>
    <Badge bg={props.hex}>AAAaaa</Badge>
    <Badge color='white' bg={props.hex}>AAAaaa</Badge>
  </Box>
)

ColorSpecimen.propTypes = {
  name: propTypes.string,
  hex: propTypes.string,
  rgba: propTypes.string,
}

ColorSpecimen.defaultProps = {
  name: 'Color',
  hex: '#999',
  rgba: '#999',
}


export default ColorSpecimen;
