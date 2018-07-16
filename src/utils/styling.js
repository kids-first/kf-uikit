import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  color,
  lineHeight,
  fontWeight,
  borders,
  borderRadius,
  alignItems,
  justifyContent,
  flexGrow,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  maxWidth,
  complexStyle,
  hover,
  textAlign
} from 'styled-system';

export const applyProp = (name, value) => (value ? `${name}: ${value};` : ``);
export const overflow = ({ overflow }) => applyProp(`overflow`, overflow);
export const overflowY = ({ overflowY }) => applyProp(`overflow-y`, overflowY);
const baseStyles = complexStyle({
  prop: 'baseStyle',
  key: 'baseStyles'
});

export const applyDefaultStyles = Component => {
  const styledComponent = styled(Component.toLowerCase())`
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
  styledComponent.displayName = Component.toUpperCase();
  return styledComponent;
};

// export const applyDefaultStyles = Component => styled(Component)`
//   ${baseStyles}
//   ${space}
//   ${width}
//   ${fontSize}
//   ${fontWeight}
//   ${color}
//   ${maxWidth}
//   ${justifySelf}
//   ${alignSelf}
//   ${borders}
//   ${borderRadius}
//   ${lineHeight}
//   ${overflow}
//   ${overflowY}
//   ${hover}
//   ${textAlign}
// `;
