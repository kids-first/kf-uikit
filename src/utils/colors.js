import chroma from 'chroma-js';
import { isUndefined } from 'lodash';

const minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5,
};

export function processColor(key, hex) {
  if (isUndefined(hex)) return null;
  const hexc = chroma(hex).hex();
  const rgba = chroma(hex).rgba();
  const contrast = chroma.contrast(hexc, 'white');
  return {
    key,
    hex: hexc,
    rgba,
    contrast,
    accessibility: {
      aa: contrast >= minimums.aa,
      aaLarge: contrast >= minimums.aaLarge,
      aaa: contrast >= minimums.aaa,
      aaaLarge: contrast >= minimums.aaaLarge,
    },
  };
}

/**
 * Computes the wcag grade (AAA, AAALarge, AA, AALarge) for a foreground color
 * on a background color
 */
export function wcagGrade(fg, bg) {
  const contrast = chroma.contrast(fg, bg);
  if (contrast >= minimums.aaa) {
    return 'AAA';
  }
  if (contrast >= minimums.aa) {
    return 'AA';
  }
  if (contrast >= minimums.aaLarge) {
    return 'AA Large';
  }
  return 'Low Contrast';
}

export const hashColors = clrs =>
  Object.keys(clrs).reduce(
    (acc, name) => ({
      ...acc,
      [name]: typeof clrs[name] === 'object' ? hashColors(clrs[name]) : processColor(clrs[name]),
    }),
    {},
  );
