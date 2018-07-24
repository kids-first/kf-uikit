import React from 'react';
import styled from 'react-emotion';
import {
  space,
  color,
  fontSize,
  width
} from 'styled-system';


export const NavContainer = styled('nav')`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 94px;
  ${color}
`

NavContainer.propTypes = {
  ...width.propTypes,
  ...color.propTypes,
}

NavContainer.defaultProps = {
	bg: 'white',
}
