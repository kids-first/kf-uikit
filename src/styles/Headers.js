import React from 'react';
import styled from 'react-emotion';
import chroma from 'chroma-js';
import colors from '../theme/Colors';
import {
  color
} from 'styled-system';


export const TopBar = styled('div')`
  display: flex;
  width: auto;
  height: 6px;
  margin: none;
  padding: none;
  background-image: ${colors.research};
  ${color}
`

TopBar.propTypes = {
  ...color.propTypes,
}

TopBar.defaultProps = {
	bg: 'cammunity'
}
