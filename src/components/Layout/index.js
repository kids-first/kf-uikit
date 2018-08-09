import {
  alignItems,
  justifyContent,
  flexGrow,
  flexWrap,
  flexBasis,
  flexDirection,
  display,
  complexStyle,
} from 'styled-system';
import { applyDefaultStyles } from '../../utils/styling';
import styled from '../../kfEmotion';

const boxStyles = complexStyle({
  prop: 'boxStyle',
  key: 'boxStyles',
});

export const Box = styled(applyDefaultStyles('div'))`
  ${boxStyles};
  ${display};
`;

const flexStyles = complexStyle({
  prop: 'flexStyle',
  key: 'flexStyles',
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
