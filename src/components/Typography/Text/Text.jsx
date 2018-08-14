/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  color,
  space,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  borders,
  complexStyle,
} from 'styled-system';
import { reduce } from 'lodash';
import styled from '../../../kfFeels/kfReactEmotion';
import { css as kfCSS } from '../../../kfFeels/kfEmotion';
import { textUtils } from '../../../theme/Typography';

export const HTMLElementsMap = { p: 'Paragraph', blockquote: 'BlockQuote' };

// textUtil props from theme typography settings
const textStyles = complexStyle({
  prop: 'textStyle',
  key: 'textStyles',
});

const Text = styled('p')`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...borders.propTypes,
  /* text utility props from theme */
  textStyles: PropTypes.oneOf([...Object.keys(textUtils)]),
  /* custom emotion css override */
  css: PropTypes.string,
};

Text.defaultProps = {
  fontSize: 2,
  fontWeight: 'normal',
};

const StyledText = el => styled(Text.withComponent(el))`
    ${({ theme }) => (theme[el] ? theme[el] : '')};
    ${kfCSS(`label: --${el};`)}
    ${color}
    ${space}
    ${textAlign}
    ${borders}
    ${textStyles} 
    ${({ css }) => css}
  `;

const TextElements = Object.keys(HTMLElementsMap).map(el => {
  let component = el;
  component = StyledText(el);
  // capitalize first letter
  component.displayName = HTMLElementsMap[el];
  component.defaultProps = Text.defaultProps;
  return { [component.displayName]: component };
});

const TextElementsMap = reduce(
  TextElements,
  (acc, element) => ({
    ...acc,
    [Object.keys(element)[0]]: element[Object.keys(element)[0]],
  }),
  {},
);

export const { Paragraph, BlockQuote } = TextElementsMap;

export const TextList = {
  unordered: StyledText('ul'),
  ordered: StyledText('ol'),
};
