import { zipObject } from 'lodash';
import colors from './Colors';

export const fonts = {
  montserrat: ['Montserrat', 'Helvetica', 'sans-serif'],
  openSans: ['Open Sans'],
};
const baseFontSize = 16;

// TODO: review this for accuracy and consistency
// typographic scale
// px based
export const fontSizesScale = [14, 16, 18, 20, 22, 24, 30, 32, 36, 48, 64, 96, 128];
// keyed object to make sizes more declarative
// ex. fontSizes['32']
export const fontSizes = zipObject(fontSizesScale, fontSizesScale.map(v => `${v}px`));

export const leading = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
};

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
  font-family: ${fonts.montserrat};
  ${typographyBase}
`;

export const p = `
  font-family: ${fonts.openSans};
  color: ${colors.greyScale[1]};
  font-size: ${baseFontSize}px;
  line-height: ${leading.tight};
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
    -webkit-text-fill-color: transparent;
  `,
  h2: `
    ${headingsBase}
    color: ${colors.secondary};
    font-size: ${fontSizes['30']};
    line-height: ${leading.none};
    letter-spacing: ${letterSpacings.heading};
    color: ${colors.secondary};
    font-weight: ${fontWeights.normal};
  `,
  h3: `
    ${headingsBase}
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes['18']};
    line-height: ${leading.normal};
    letter-spacing: ${letterSpacings.heading};
    color: ${colors.secondary};
  `,
  h4: `
    ${headingsBase}
    font-family: ${fonts.body};
    font-size: ${fontSizes['16']};
    line-height: ${leading.tight};
  `,
  h5: `
    ${headingsBase}
    ${p}
    font-size: ${fontSizes['14']};
    font-weight: ${fontWeights.thin};
    line-height: ${leading.normal};
  `,
};

export const blockquote = `
  margin: 20px 0;
  padding: 5px 15px;
  ${p}
  border-left: 5px solid ${colors.border.blue};
  color: ${colors.secondary};
  font-size: ${fontSizes['22']};
  font-style: italic;
`;
const li = `
${p}
      position: relative;
      margin: 0 0 0 12px;
      padding: 0 28px 30px;
`;
export const lists = {
  ul: `
      ${p}
      margin-top: 0;
      margin-bottom: 11px;
      line-height: ${leading.loose};
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
  `,
  'ul li': li,
  ol: `
    counter-reset: li;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
  `,
  'ol li': `${li} border-left: 2px solid ${colors.greyScale[2]}; line-height: ${leading.normal};`,
  'ol li:before': `content: counter(li);
        font-size: ${fontSizes['14']};
        line-height: ${leading.loose};
        font-family: ${fonts.montserrat};
        font-weight: ${fontWeights.bold};
        counter-increment: li;
        position: absolute;
        left: -14px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 26px;
        padding: 0;
        color: ${colors.white};
        background: ${colors.border.blue};
        border-radius: 50%;
        text-align: center;
      `,
};

const Typography = {
  baseStyles: {
    ...headings,
    p,
    blockquote,
    ...lists,
  },
  settings: {
    fonts,
    baseFontSize,
    fontSizes,
    leading,
    fontWeights,
    letterSpacings,
  },
};
export default Typography;
