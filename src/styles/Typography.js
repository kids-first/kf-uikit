import React from 'react';
import styled from 'react-emotion';
import {
  color,
  fontSize,
  fontFamily
} from 'styled-system';

export const BaseTypography = styled('p')`
  font-family: Montserrat;
  ${fontSize}
`

export const BaseHeading = styled('h1')`
  font-family: Montserrat;
  margin: 0;
  ${fontSize}
`

BaseHeading.defaultProps = {
  fontSize: 1
}

BaseHeading.propTypes = {
  ...fontFamily.propTypes,
  ...fontSize.propTypes
}

export const H1 = styled(BaseHeading)`
  ${fontSize}
`

H1.propTypes = {
  ...fontSize.propTypes,
}

H1.defaultProps = {
  fontSize: 3
}
