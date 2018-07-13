import styled from 'react-emotion';
// import { Trans } from 'react-i18next'; TODO: add Trans by default
import {
  width,
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  space,
  color,
  borders,
  hover,
  complexStyle
} from 'styled-system';

export const textStyles = complexStyle({
  prop: 'textStyle',
  key: 'textStyles'
});

const applyDefaultTypeStyles = Component => {
  let isP = Component === 'p';
  const styledComponent = styled(Component.toLowerCase())`
    ${({ theme }) => theme[isP ? 'paragraph' : Component.toLowerCase()]};
    ${space}
    ${width}
    ${fontSize}
    ${fontWeight}
    ${color}
    ${fontFamily}
    ${borders}
    ${letterSpacing}
    ${lineHeight}
    ${hover}
    ${textAlign}
    ${textStyles}
    ${({ css }) => css}
`;
  styledComponent.displayName = Component.toUpperCase();
  return styledComponent;
};

export const P = applyDefaultTypeStyles('p');
export const Span = applyDefaultTypeStyles('Span');

export const H1 = applyDefaultTypeStyles('H1');

export const H2 = applyDefaultTypeStyles('H2');

export const H3 = applyDefaultTypeStyles('H3');

export const H4 = applyDefaultTypeStyles('H4');

export const H5 = applyDefaultTypeStyles('H5');
