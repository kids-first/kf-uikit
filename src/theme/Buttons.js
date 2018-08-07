import chroma from 'chroma-js';
import * as colors from './Colors';

const buttonColor = {
  primary: {
    fg: colors.white,
    bg: chroma(colors.secondary)
      .brighten(0.5)
      .css(),
    hover: chroma(colors.secondary)
      .brighten(1)
      .css(),
    disabled: chroma(colors.secondary)
      .brighten(0.5)
      .desaturate(1)
      .css(),
  },
  info: {
    fg: colors.white,
    bg: chroma(colors.tertiary).css(),
    hover: chroma(colors.tertiary)
      .brighten(0.5)
      .css(),
    disabled: chroma(colors.tertiary)
      .brighten(0.5)
      .desaturate(0.5)
      .css(),
  },
  warn: {
    fg: palette.white,
    bg: chroma(colors.primary).css(),
    hover: chroma(colors.primary)
      .brighten(0.5)
      .css(),
    disabled: chroma(colors.primary)
      .brighten(0.5)
      .desaturate(1.5)
      .css(),
  },
};

export default {
  buttonColor,
};
