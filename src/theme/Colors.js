import chroma from 'chroma-js';

const brand = {
  primary: '#90278e', // magenta
  secondary: '#2b388f', // purplish blue
  tertiary: '#009bb8', // teal-bluef
};

// TODO: better state name definitions and separation ?
const state = {
  info: chroma(brand.tertiary)
    .brighten(1)
    .css(),
  error: {
    dark: '#d8202f', // red
    light: '#fadfe1', // light red (pink) fill
  },
  warn: chroma(brand.primary)
    .brighten(1)
    .css(),
  highlight: '#e83a9c', // pink
  active: '#00afed', // light blue
  inactive: '#dedfe4', // grey
  optionSelected: '#E5F6FD', // light blue
  hover: {
    main: '#c03299', // also pink
    primary: '#404c9a', // purple
    tertiary: '#19a9c4', // lighter teal-blue
  },
};

const gradient = {
  community: `linear-gradient(to right,${
    brand.primary
  }, #cc3399 35%, #be1e2d 66%, #f6921e)`,
  research: `linear-gradient(to right, ${brand.secondary}, ${
    brand.tertiary
  } 51%, #02b0ed),
             linear-gradient(${brand.secondary}, ${brand.secondary})`,
  health:
    'linear-gradient(to right, rgb(10, 93, 108), rgb(25, 136, 149) 51%, rgb(28, 163, 158))',
};

const greyScale = {
  // B/W
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  grey: [...Array(12).keys()].map(i =>
    chroma('rgb(0,0,0)')
      .brighten(i / 2)
      .css(),
  ),
};

const background = {
  grey: '#f4f5f8',
  error: '#f9dee1',
  tertiary: '#edeef1', // light light blue
};

const border = {
  grey: '#cacbcf',
  error: '#e45562',
  blue: '#00adee',
};

const colors = {
  ...brand,
  ...state,
  ...greyScale,
  background,
  border,
  gradient,
};

export default colors;
