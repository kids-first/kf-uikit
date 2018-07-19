const colors = {
  primary: 'rgb(144,39,142)',   //magenta
  secondary: 'rgb(43,56,143)',  //purplish blue
  tertiary: 'rgb(0,155,184)',   //teal-blue

  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',

  highlight: 'rgb(232,58,156)', //pink

  active: 'rgb(0,175,237)',     //light blue
  inactive: 'rgb(222,223,228)', //grey

  optionSelected: 'rgb(229,246,253)', //light blue
  grey: [
    'rgb(237,238,241)',         //grey for table backgrounds
    'rgb(116,117,125)',         //rgb(116, 117, 125) dark grey text on greyScale5
    'rgb(212,214,221)',
    'rgb(107,98,98)',
    'rgb(245,245,245)',
    'rgb(224,225,230)',
    'rgb(212, 214, 221)',       //#d4d6dd
    'rgb(144,144,144)',         //not enough contrast on white background
    'rgb(61,61,61)',
    'rgb(52, 52, 52)',          //#343434
    'rgb(36,36,36)'
  ],

  hover: {
    main: 'rgb(192,50,153)', //also pink
    primary: 'rgb(64,76,154)', //purple
    tertiary: 'rgb(25,169,196)' //lighter teal-blue
  },
  background: {
    grey: 'rgb(244,245,248)',
    error: 'rgb(249,222,225)',
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
