import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {
  color,
  space,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight
} from 'styled-system';


export const Text = styled('span')`
  font-family: ${ props => props.theme.fonts.default};
  list-style-type: square;
  ${color}
  ${space}
  ${textAlign}
  ${lineHeight}
  ${fontSize}
  ${fontWeight}
`

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
}

Text.defaultProps = {
  fontSize: 1,
  m: 0
}

Text.p = Text.withComponent('p')
Text.p.defaultProps = {
  ...Text.defaultProps,
  p: 1
}

Text.ul = Text.withComponent('ul')
Text.ul.defaultProps = {
  ...Text.defaultProps,
  m: 1
}

Text.li = Text.withComponent('li')
Text.li.defaultProps = {
  ...Text.defaultProps,
}

