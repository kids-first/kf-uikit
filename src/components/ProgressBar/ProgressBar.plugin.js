/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash')
const defaultConfig = require('tailwindcss/defaultConfig')()

function defaultOptions() {
  return {
    colors: {
      white: {
        background: defaultConfig.colors.white,
      },
      black: {
        background: defaultConfig.colors.black,
      },
    },
  }
}

module.exports = (opts) => {
  const options = _.isFunction(opts)
   ? opts(defaultOptions())
   : _.defaults(opts, defaultOptions())

  return ({ addComponents, e }) => {
    addComponents([
      ..._.map(options.colors, (colorOptions, name) => ({
        [`.ProgressBar--bar-${e(name)}`]: {
          display: 'inline-block',
          backgroundColor: colorOptions.background,
          height: '100%',
        }
      }))
    ])
  }
}
