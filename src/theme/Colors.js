import chroma from 'chroma-js';

const pallette = {
  // B/W
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  grey: [...Array(12).keys()].map(i => chroma('rgb(0,0,0)').brighten(i/2)),

  // Branding
  primary: 'rgb(144,39,142)',   //magenta
  secondary: 'rgb(43,56,143)',  //purplish blue
  tertiary: 'rgb(0,155,184)',   //teal-blue

  info: 'rgb(232,58,156)', // pink
  error: 'rgb(232,58,156)',
}

const colors = {
  ...pallette,

  active: 'rgb(0,175,237)',     //light blue
  inactive: '#999',

  optionSelected: 'rgb(229,246,253)', //light blue

  hover: {
    main: chroma(pallette.info).brighten(0.1),
    primary: chroma(pallette.primary).brighten(1),
    tertiary: chroma(pallette.secondary).brighten(1)
  },

  background: {
    grey: pallette.grey[1],
    error: pallette.error,
    tertiary: 'rgb(237,238,241)' // light light blue
  },
  border: {
    grey: 'rgb(202,203,207)',
    error: `rgb(228,85,98)`,
    blue: 'rgb(0,173,238)'
  },
  error: {
    dark: 'rgb(216,32,47)', //red
    light: 'rgb(250,223,225)' //light red (pink) fill
  }
};

export const gradients = {
  community: `linear-gradient(to right,${
    colors.primary
  }, #cc3399 35%, #be1e2d 66%, #f6921e)`,
  research: `linear-gradient(to right, ${colors.hover.primary}, ${
    colors.tertiary
  } 51%, #02b0ed), linear-gradient(${colors.secondary}, ${colors.secondary})`,
  health: `linear-gradient(to right, rgb(10, 93, 108), rgb(25, 136, 149) 51%, rgb(28, 163, 158))`
};

export const shadows = [
  '0 0 4.8px 0.2px #a0a0a3',
  '0 0 2.9px 0.1px #a0a0a3',
  'rgba(0, 0, 0, 0.5)'
];

export default colors;
