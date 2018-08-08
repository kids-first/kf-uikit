import {
  headings,
  textUtils,
  fonts,
  paragraph,
  blockquote,
  lists,
  fontWeights,
} from './Typography';
import colors from './Colors';

export default {
  colors,
  fonts,
  ...headings,
  paragraph,
  blockquote,
  fontWeights,
  ...lists,
  textStyles: {
    ...textUtils,
  },
};
