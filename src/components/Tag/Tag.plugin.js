/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash')
const defaultConfig = require('tailwindcss/defaultConfig')()

function defaultOptions() {
  return {
    borderRadius: '1.5rem',
    fontWeight: '300',
    lineHeight: '1.0',
    fontSize: '0.8rem',
    padding: '.4rem 0.8rem',
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
        fontSize: '.6rem',
        padding: '.3rem .6rem',
        borderRadius: '1.0rem',
      },
      large: {
        fontSize: '1.25rem',
        padding: '.75rem 1.5rem',
        borderRadius: '1.7rem',
      }
    }
  }
}

module.exports = (opts) => {
  const options = _.isFunction(opts)
   ? opts(defaultOptions())
   : _.defaults(opts, defaultOptions())

  return ({ addComponents, e }) => {
    addComponents([
      {
        '.Tag': {
          display: 'inline-block',
          padding: options.padding,
          fontSize: options.fontSize,
          fontWeight: options.fontWeight,
          lineHeight: options.lineHeight,
          borderRadius: options.borderRadius,
          textDecoration: 'none',
        }
      },
      ..._.map(_.omit(options.sizes, 'default'), (sizeOptions, name) => ({
        [`.Tag--${e(name)}`]: {
          padding: _.get(sizeOptions, 'padding', options.padding),
          fontSize: _.get(sizeOptions, 'fontSize', options.fontSize),
          fontWeight: _.get(sizeOptions, 'fontWeight', options.fontWeight),
          lineHeight: _.get(sizeOptions, 'lineHeight', options.lineHeight),
          borderRadius: _.get(sizeOptions, 'borderRadius', options.borderRadius),
        }
      })),
      ..._.map(options.colors, (colorOptions, name) => ({
        [`.Tag--${e(name)}`]: {
          border: `2px solid ${colorOptions.background}`,
          backgroundColor: colorOptions.background,
          color: colorOptions.text,
        }
      }))
    ])
  }
}
