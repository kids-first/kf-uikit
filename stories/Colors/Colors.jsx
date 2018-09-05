import React from 'react';
import propTypes from 'prop-types';
import * as theme from '../../tailwind.js';
import { processColor } from '../../src/utils/colors';

/**
 * A basic square swatch to display a color
 */
function Swatch(props) {
  const { color, children } = props;
  let colorData = processColor(color, theme.colors[color]);
  const shades = ['-darkest', '-darker', '-dark', '', '-light', '-lighter', '-lightest'].map(
    (shade, idx, arr) => (
      <div
        className={`block w-full h-${
          idx == 3 ? 16 : 8
        }  bg-${color}${shade} font-body align-middle text-white p-${idx == 3 ? 6 : 2}`}
      >
        {shade ? (
          <small className="inline-block float-left">{shade.replace('-', '')}</small>
        ) : (
          <small className="inline-block float-left font-bold tracking-wide">
            {color.toUpperCase()}
          </small>
        )}
        <small className="inline-block float-right">
          {processColor(`${color}${shade}`, theme.colors[`${color}${shade}`]).hex}
        </small>
      </div>
    ),
  );

  return (
    <div className="container overflow-hidden w-1/3 m-3">
      <div className="w-full overflow-hidden rounded-sm">{shades}</div>
      <h3 className="font-title text-center">{color}</h3>
      {children}
    </div>
  );
}

Swatch.propTypes = {
  color: propTypes.string,
  children: propTypes.element,
};

Swatch.defaultProps = {
  color: 'primary',
  children: null,
};

export default Swatch;
