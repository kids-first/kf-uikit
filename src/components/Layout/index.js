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
import { applyDefaultStyles } from '../../utils';

const boxStyles = complexStyle({
  prop: 'boxStyle',
  key: 'boxStyles'
});
export const Box = styled(applyDefaultStyles('div'))`
  ${boxStyles};
`;

const flexStyles = complexStyle({
  prop: 'flexStyle',
  key: 'flexStyles'
});
export const Flex = styled(Box)`
  display: flex;
  ${flexStyles};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexBasis};
  ${flexDirection};
  ${flexGrow};
`;
