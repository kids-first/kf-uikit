import { headings, textUtils, fonts, p, blockquote, lists, fontWeights } from './Typography';
import colors from './Colors';
import buttons from './Buttons';

export default {
  colors,
  buttons,
  fonts,
  ...headings,
  p,
  blockquote,
  fontWeights,
  ...lists,
  textStyles: {
    ...textUtils,
  },
};
