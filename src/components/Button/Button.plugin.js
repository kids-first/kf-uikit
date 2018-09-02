/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash')
const chroma = require('chroma-js')
const defaultConfig = require('tailwindcss/defaultConfig')()

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
        '.Button': {
          display: 'inline-block',
          padding: options.padding,
          fontSize: options.fontSize,
          fontWeight: options.fontWeight,
          lineHeight: options.lineHeight,
          borderRadius: options.borderRadius,
          textDecoration: 'none',

          '&:disabled': {
            opacity: 0.7,
            cursor: 'not-allowed',
          }
        }
      },
      ..._.map(_.omit(options.sizes, 'default'), (sizeOptions, name) => ({
        [`.Button--${e(name)}`]: {
          padding: _.get(sizeOptions, 'padding', options.padding),
          fontSize: _.get(sizeOptions, 'fontSize', options.fontSize),
          fontWeight: _.get(sizeOptions, 'fontWeight', options.fontWeight),
          lineHeight: _.get(sizeOptions, 'lineHeight', options.lineHeight),
          borderRadius: _.get(sizeOptions, 'borderRadius', options.borderRadius),
        }
      })),
      ..._.map(options.colors, (colorOptions, name) => ({
        [`.Button--${e(name)}`]: {
          border: `2px solid ${colorOptions.background}`,
          backgroundColor: colorOptions.background,
          color: colorOptions.text,
          '&:focus': {
            outline: 0,
            boxShadow: `0 0 0 .2em ${chroma(colorOptions.background).alpha(.5).css()}`,
          },
          '&:hover': {
            backgroundColor: _.get(colorOptions, 'hoverBackground', chroma(colorOptions.background).darken(0.2).css()),
            color: _.get(colorOptions, 'hoverText', colorOptions.text),
          },
          '&:active': {
            backgroundColor: _.get(colorOptions, 'activeBackground', chroma(colorOptions.background).darken(0.2).css()),
            color: _.get(colorOptions, 'activeText', colorOptions.text),
          }
        }
      })),
      ..._.map(options.colors, (colorOptions, name) => ({
        [`.Button--outline-${e(name)}`]: {
          border: `2px solid ${colorOptions.background}`,
          color: colorOptions.background,
          '&:focus': {
            outline: 0,
            boxShadow: `0 0 0 .2em ${chroma(colorOptions.background).alpha(.5).css()}`,
          },
          '&:hover': {
            backgroundColor: _.get(colorOptions, 'hoverBackground', chroma(colorOptions.background).darken(0.2).css()),
            color: _.get(colorOptions, 'hoverText', colorOptions.text),
          },
          '&:active': {
            backgroundColor: _.get(colorOptions, 'activeBackground', chroma(colorOptions.background).darken(0.2).css()),
            color: _.get(colorOptions, 'activeText', colorOptions.text),
          }
        }
      }))
    ])
  }
}
