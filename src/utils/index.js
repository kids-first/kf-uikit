import chroma from 'chroma-js';
const minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5
};

export const processColor = hex => {
  hex = chroma(hex).hex();
  const rgba = chroma(hex).rgba();
  const contrast = chroma.contrast(hex, 'white');
  return {
    hex,
    rgba,
    contrast,
    accessibility: {
      aa: contrast >= minimums.aa,
      aaLarge: contrast >= minimums.aaLarge,
      aaa: contrast >= minimums.aaa,
      aaaLarge: contrast >= minimums.aaaLarge
    }
  };
};
