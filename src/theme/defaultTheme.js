import {
  headings,
  textUtils,
  fonts,
  paragraph,
  blockquote,
  lists,
} from './Typography';
import colors from './Colors';

export default {
  colors,
  fonts,
  ...headings,
  paragraph,
  blockquote,
  ...lists,
  textStyles: {
    ...textUtils,
  },
};
