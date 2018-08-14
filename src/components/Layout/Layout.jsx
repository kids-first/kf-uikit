/* eslint-disable */
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
import styled from '../../kfFeels/kfReactEmotion';
import { css } from '../../kfFeels';

const boxStyles = complexStyle({
  prop: 'boxStyle',
  key: 'boxStyles',
});

export const Box = styled(applyDefaultStyles('div'))`
  ${css(`label: --Box;`)} border: 1px solid black;
  ${boxStyles};
  ${display};
`;

const flexStyles = complexStyle({
  prop: 'flexStyle',
  key: 'flexStyles',
});

export const Flex = styled(Box)`
  ${css(`label: --Box__flex;`)} display: flex;
  ${flexStyles};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexBasis};
  ${flexDirection};
  ${flexGrow};
`;
