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


export const Heading = styled('span')`
  font-family: ${ props => props.theme.fonts.default};
  font-weight: ${ props => props.theme.fontWeights.normal};
  ${color}
  ${space}
  ${textAlign}
  ${lineHeight}
  ${fontSize}
  ${fontWeight}
`

Heading.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
}

Heading.defaultProps = {
  fontSize: 3,
  color: 'secondary',
  fontWeight: 'normal',
  m: 0
}

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 6,
  m: 1
}

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 5,
  m: 1
}

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  ...Heading.defaultProps,
  fontWeight: 'thin',
  fontSize: 4,
}

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  ...Heading.defaultProps,
  fontWeight: 'thin',
  fontSize: 3,
}

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  ...Heading.defaultProps,
  fontWeight: 'thin',
  fontSize: 2,
}
