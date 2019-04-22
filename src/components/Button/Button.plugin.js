/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash');
const defaultConfig = require('tailwindcss/defaultConfig')();

function defaultOptions() {
  return {
    borderRadius: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.25',
    fontSize: '1rem',
    padding: '.5rem 1rem',
    colors: {
      white: {
        background: defaultConfig.colors.white,
        text: defaultConfig.colors.black,
      },
      black: {
        background: defaultConfig.colors.black,
        text: defaultConfig.colors.white,
      },
    },
    sizes: {
      small: {
        fontSize: '.7rem',
        padding: '.3rem .6rem',
        borderRadius: '1.0rem',
      },
      large: {
        fontSize: '1.25rem',
        padding: '.75rem 1.5rem',
        borderRadius: '1.7rem',
      },
    },
  };
}

module.exports = opts => {
  const options = _.isFunction(opts) ? opts(defaultOptions()) : _.defaults(opts, defaultOptions());

  return ({ addComponents, e }) => {
    addComponents([
      ..._.map(_.omit(options.sizes, 'default'), (sizeOptions, name) => ({
        [`.Button--${e(name)}`]: {
          padding: _.get(sizeOptions, 'padding', options.padding),
          fontSize: _.get(sizeOptions, 'fontSize', options.fontSize),
          fontWeight: _.get(sizeOptions, 'fontWeight', options.fontWeight),
          lineHeight: _.get(sizeOptions, 'lineHeight', options.lineHeight),
          borderRadius: _.get(sizeOptions, 'borderRadius', options.borderRadius),
        },
      })),
    ]);
  };
};
