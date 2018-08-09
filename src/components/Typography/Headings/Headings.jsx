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
import { textUtils } from '../../../theme/Typography';

export const HTMLHeadings = ['h1', 'h2', 'h3', 'h4', 'h5'];

// textUtil props from theme typography settings
const textStyles = complexStyle({
  prop: 'textStyle',
  key: 'textStyles',
});

// TODO: review usage and specs
const Heading = styled('span')`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

Heading.propTypes = {
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

Heading.defaultProps = {
  color: 'secondary',
  fontWeight: 'normal',
};

const Headings = HTMLHeadings.map(el => {
  let component = el;
  component = styled(Heading.withComponent(el))`
    ${({ theme }) => theme[el]};
    ${color}
    ${space}
    ${textAlign}
    ${borders}
    ${lineHeight} 
    ${fontWeight} 
    ${textStyles} 
    ${({ css }) => css}
  `;
  component.displayName = el.toUpperCase();
  component.defaultProps = { ...Heading.defaultProps };
  return { [component.displayName]: component };
});

const HeadingsMap = reduce(
  Headings,
  (acc, heading) => ({
    ...acc,
    [Object.keys(heading)[0]]: heading[Object.keys(heading)[0]],
  }),
  {},
);

export const { H1, H2, H3, H4, H5 } = HeadingsMap;
