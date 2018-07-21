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

const palette = {
  // B/W
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  grey: [...Array(12).keys()].map(i => chroma('rgb(0,0,0)').brighten(i/2).css()),
	...brand,
	...states,
}

const colors = {
  ...palette
}

export default colors;
