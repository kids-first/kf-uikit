import { css } from 'react-emotion';
import {
  headings,
  textUtils,
  fonts,
  paragraph,
  blockquote,
  lists
} from './Typography';
import colors from './Colors';
// import buttons from './Buttons';
// import layout from './Layout';
// import links from './Links';

const mixins = {
  linkButtonActive: css`
    border-radius: 19px;
    background-color: ${colors.primaryHover};
    border: solid 2px ${colors.borderGrey};
    color: ${colors.white};
  `
};

const components = {
  textStyles: {
    ...textUtils
  },

  dropdownContainer: css`
    position: absolute;
    top: 100%;
    backgroundcolor: white;
    border: 1px solid ${colors.greyScale4};
    width: 100%;
    font-size: 14px;
  `,

  //no styles for these yet
  error: css``,
  warning: css``,
  info: css``
};

export default {
  colors,
  fonts,
  ...headings,
  paragraph,
  blockquote,
  ...lists,
  textStyles: {
    ...textUtils
  }
};
