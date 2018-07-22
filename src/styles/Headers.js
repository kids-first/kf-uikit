import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  color
} from 'styled-system';


export const TopBar = styled('div')`
  display: flex;
  width: auto;
  height: 6px;
  margin: none;
  padding: none;
  background-color: ${props => props.barColor? props.barColor: null};
  background-image: ${props => props.barColor ? null : props.theme.colors.research};
  ${color}
`

TopBar.propTypes = {
  ...color.propTypes,
  bgcolor: PropTypes.string
}

TopBar.defaultProps = {
	bg: 'community',
  bgcolor: null
}
