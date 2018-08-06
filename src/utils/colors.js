import chroma from 'chroma-js';

const minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5,
};

export default function processColor(hex) {
  const hexc = chroma(hex).hex();
  const rgba = chroma(hexc).rgba();
  const contrast = chroma.contrast(hexc, 'white');
  return {
    hexc,
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
