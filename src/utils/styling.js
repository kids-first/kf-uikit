import {
  space,
  width,
  fontSize,
  color,
  lineHeight,
  fontWeight,
  borders,
  borderRadius,
  justifySelf,
  alignSelf,
  maxWidth,
  complexStyle,
  hover,
  textAlign,
} from 'styled-system';
import styled from '../kfEmotion';

export const applyProp = (name, value) => (value ? `${name}: ${value};` : '');
export const overflow = ({ ov }) => applyProp('overflow', ov);
export const overflowY = ({ ov }) => applyProp('overflow-y', ov);
const baseStyles = complexStyle({
  prop: 'baseStyle',
  key: 'baseStyles',
});

export const applyDefaultStyles = Component => styled(Component)`
  ${baseStyles}
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${maxWidth}
  ${justifySelf}
  ${alignSelf}
  ${borders}
  ${borderRadius}
  ${lineHeight}
  ${overflow}
  ${overflowY}
  ${hover}
  ${textAlign}
`;
