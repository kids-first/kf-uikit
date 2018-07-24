import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import {
  border,
  borderColor,
  borderRadius,
  space,
  color,
  fontFamily,
  width,
  display
} from 'styled-system';


const buttonHover = (props) => props.disabled ?
  css`
  &:hover {
    cursor: not-allowed;
  }
  ` :
  css`
  &:hover {
    background-color: ${ props.theme.colors.buttons[props.kind].hover };
    cursor: pointer;
  }
`

const buttonColor = (props) => {
  const colors = props.theme.colors.buttons[props.kind];
  return (
    css`
    ${props.outline ? (
      `border: ${props.disabled ? colors.disabled : colors.bg} 2px solid;
      background-color: ${props.disabled ? props.theme.colors.grey[10] : 'inherit'};
      color: ${props.theme.colors.grey[2]};
      `
    ) : (
      `border: ${props.theme.colors.grey[10]} 2px solid;
      background-color: ${colors.bg};
      color: ${props.disabled ? props.theme.colors.grey[10] : colors.fg};
      `
    )}
    `
  )
};

const size = (props) => {switch(props.size) {
  case 'large':
    return (
      css`
      font-size: 24px;
      border-radius: 20px;
      `
    );
  case 'small':
    return (
      css`
      font-size: 14px;
      border-radius: 15px;
      `
    );
  default:
    return (
      css`
      font-size: 20px;
      border-radius: 19px;
      `
    );
}};

export const Button = styled('button')`
  font-family: ${ props => props.theme.fonts.default};
  font-weight: ${ props => props.theme.fontWeights.thin};
  ${size}
  ${buttonColor}
  ${buttonHover}
  ${display}
  ${space}
`

Button.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...display.propTypes,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  kind: PropTypes.string,
  outline: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  size: 'normal',
  kind: 'primary',
  outline: false,
  display: 'inline-block',
  p: 2,
  m: 1
}
