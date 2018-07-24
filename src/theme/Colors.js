import chroma from 'chroma-js';

const brand = {
  primary: 'rgb(144,39,142)',   //magenta
  secondary: 'rgb(43,56,143)',  //purplish blue
  tertiary: 'rgb(0,155,184)',   //teal-blue
}

const states = {
  info: chroma(brand.tertiary).brighten(1).css(),
  error: 'rgb(232,58,156)',
  warn: chroma(brand.primary).brighten(1).css()
}

const gradients = {
  community: `linear-gradient(to right,${brand.primary}, #cc3399 35%, #be1e2d 66%, #f6921e)`,
  research: `linear-gradient(to right, ${brand.secondary}, ${ brand.tertiary } 51%, #02b0ed),
             linear-gradient(${brand.secondary}, ${brand.secondary})`,
  health: `linear-gradient(to right, rgb(10, 93, 108), rgb(25, 136, 149) 51%, rgb(28, 163, 158))`
}

const palette = {
  // B/W
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  grey: [...Array(12).keys()].map(i => chroma('rgb(0,0,0)').brighten(i/2).css()),
	...brand,
	...states,
  ...gradients
}

const buttons = {
  primary: {
    fg: palette.white,
    bg: chroma(brand.secondary).brighten(0.5).css(),
    hover: chroma(brand.secondary).brighten(1).css(),
    disabled: chroma(brand.secondary).brighten(0.5).desaturate(1).css()
  },
  info: {
    fg: palette.white,
    bg: chroma(brand.tertiary).css(),
    hover: chroma(brand.tertiary).brighten(0.5).css(),
    disabled: chroma(brand.tertiary).brighten(0.5).desaturate(0.5).css()
  },
  warn: {
    fg: palette.white,
    bg: chroma(brand.primary).css(),
    hover: chroma(brand.primary).brighten(0.5).css(),
    disabled: chroma(brand.primary).brighten(0.5).desaturate(1.5).css()
  }
}

const colors = {
  ...palette,
  buttons
}

export default colors;
