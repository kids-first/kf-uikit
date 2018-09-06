import React from 'react';
import propTypes from 'prop-types';
import * as theme from '../../tailwind.js';
import { processColor } from '../../src/utils/colors';
import { compact } from 'lodash';
const ColorValues = ({ color }) => (
  <small className="group inline-block float-right text-right">
    <span className="group-hover:hidden">{color.hex}</span>
    <span className="hidden group-hover:inline-block">
      rgb(
      {color.rgba.slice(0, 3).join(',')})
    </span>
  </small>
);

/**
 * A basic square swatch to display a color
 */
function Swatch(props) {
  const { color, children } = props;
  let colorData = processColor(color, theme.colors[color]);
  const shadesData = ['-darkest', '-darker', '-dark', '', '-light', '-lighter', '-lightest'].map(
    shade => processColor(`${color}${shade}`, theme.colors[`${color}${shade}`]),
  );
  console.log(shadesData);
  const hasShades = compact(shadesData).length > 1;
  let shades = () => <div>no shades</div>;
  if (hasShades) {
    shades = shadesData.map((shade, idx) => (
      <div
        className={`block w-full h-${idx == 3 ? 16 : 8}  bg-${
          shade.key
        } font-body align-middle text-white p-2 ${idx === 3 ? 'pt-6' : ''}`}
      >
        {shade.key.includes('-') ? (
          <small className="inline-block float-left">{shade.key.split('-')[1]}</small>
        ) : (
          <small className="inline-block float-left font-bold tracking-wide">
            {color.toUpperCase()}
          </small>
        )}

        <ColorValues color={shade} />
      </div>
    ));
  } else {
    shades = (
      <div
        className={`block w-full h-16  bg-${color} font-body align-middle text-${
          color == 'white' ? 'black' : 'white'
        } p-2 pt-6`}
      >
        <small className="inline-block float-left font-bold tracking-wide">
          {color.toUpperCase()}
        </small>
        <ColorValues color={colorData} />
      </div>
    );
  }

  return (
    <div className="container overflow-hidden w-1/3 m-3">
      <div className="w-full overflow-hidden rounded-sm">{shades}</div>
      <h3 className="font-title text-center">{color}</h3>
      {children}
    </div>
  );
}

export default Swatch;
