/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash')
const defaultConfig = require('tailwindcss/defaultConfig')()

function defaultOptions() {
  return {
    height: '0.5rem',
    colors: {
      white: defaultConfig.colors.white,
    }
  }
}

module.exports = (opts) => {
  const options = _.isFunction(opts)
   ? opts(defaultOptions())
   : _.defaults(opts, defaultOptions())

  return ({ addComponents, e }) => {
    addComponents([
      ..._.map(options.colors, (color, name) => ({
        [`.Icon--${e(name)}`]: {
          borderTop: `${options.height} solid ${color}`,
        }
      }))
    ])
  }
}
