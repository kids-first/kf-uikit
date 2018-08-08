import { zipObject } from 'lodash';
import colors from './Colors';

export const fonts = {
  default: 'Montserrat, Helvetica, sans-serif',
  details: 'Open Sans',
};
const baseFontSize = 16;

// typographic scale
// px based
export const fontSizesScale = [
  14,
  16,
  18,
  20,
  22,
  24,
  30,
  32,
  36,
  48,
  64,
  96,
  128,
];
// keyed object to make sizes more declarative
// ex. fontSizes['32']
export const fontSizes = zipObject(
  fontSizesScale,
  fontSizesScale.map(v => `${v}px`),
);

// for any scale, either array or objects will work
// em based
export const lineHeightsScale = [0.95, 1, 1.125, 1.25, 1.44, 1.5, 1.86, 2];
export const lineHeights = zipObject(lineHeightsScale, lineHeightsScale);

// based on imported fonts in index.css
export const fontWeights = {
  ultraThin: 100,
  thin: 300,
  regular: 400,
  normal: 500,
  bold: 700,
};

export const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  heading: '0.5px',
};

const typographyBase = `
  text-decoration: none; 
  border: none;
`;

const headingsBase = `
  font-family: ${fonts.default};
  ${typographyBase}
`;

export const paragraph = `
  font-family: ${fonts.details};
  color: ${colors.greyScale1};
  font-size: ${baseFontSize}px;
  line-height: ${lineHeights['1.25']};
  ${typographyBase}
`;

export const headings = {
  h1: ` 
  ${headingsBase}
    font-size: ${fontSizes['36']};
    font-weight: ${fontWeights.normal};
    letter-spacing: ${letterSpacings.heading};
    background-image: ${colors.gradient.research};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`,
  h2: `
    ${headingsBase}
    color: ${colors.secondary};
    font-size: ${fontSizes['30']};
    line-height: ${lineHeights['0.95']};
    letter-spacing: ${letterSpacings.heading};
    color: ${colors.secondary};
    font-weight: ${fontWeights.normal};
  `,
  h3: `
    ${headingsBase}
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes['18']};
    line-height: ${lineHeights['1.44']};
    letter-spacing: ${letterSpacings.heading};
    color: ${colors.secondary};
  `,
  h4: `
    ${headingsBase}
    font-family: ${fonts.details};
    font-size: ${fontSizes['16']};
    line-height: ${lineHeights['1.25']};
  `,
  h5: `
    ${headingsBase}
    ${paragraph}
    font-size: ${fontSizes['14']};
    font-weight: ${fontWeights.thin};
  `,
};

export const blockquote = `
  margin: 20px 0;
  padding: 5px 15px;
  ${paragraph}
  border-left: 5px solid ${colors.border.blue};
  color: ${colors.secondary};
  font-size: ${fontSizes['22']};
  font-style: italic;
`;

export const lists = {
  ul: `
      ${paragraph}
      margin-top: 0;
      margin-bottom: 11px;
      line-height: ${lineHeights['2']};
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
  `,
  ol: `
      counter-reset: li;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
    li {
      ${paragraph}
      position: relative;
      margin: 0 0 0 12px;
      padding: 0 28px 30px;
      border-left: 2px solid ${colors.grey[2]};
      line-height: ${lineHeights['1.5']};
      &:before {
        content: counter(li);
        font-size: ${fontSizes['14']};
        line-height: ${lineHeights['1.86']}; //26px
        font-family: ${fonts.default};
        font-weight: ${fontWeights.bold};
        counter-increment: li;
        position: absolute;
        left: -14px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 26px;
        padding: 0;
        color: #fff;
        background: ${colors.border.blue};
        border-radius: 50%;
        text-align: center;
      }
    }
  `,
};

export const textUtils = {
  center: { textAlign: 'center' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
  underline: { textDecoration: 'underline' },
  clean: { textDecoration: 'none' },
  italic: { fontStyle: 'italic' },
  caps: { textTransform: 'capitalize' },
  upper: { textTransform: 'uppercase' },
  lower: { textTransform: 'lowercase' },
  small: { fontSize: '75%' },
};
