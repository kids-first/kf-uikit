import React from 'react';
import propTypes from 'prop-types';
import * as theme from '../../tailwind.js';
import { processColor, wcagGrade } from '../../src/utils/colors';
import { compact, toPairs, omit } from 'lodash';

const ColorValues = ({ color }) => (
  <small className="group inline-block h-full self-end text-right">
    <p className="leading-tight">{color.hex}</p>
    <p className="leading-tight mt-0">
      rgb(
      {color.rgba.slice(0, 3).join(',')})
    </p>
  </small>
);

/**
 * A basic square swatch to display a color
 */
function Swatch(props) {
  const { color, children } = props;
  let colorData = processColor(color, theme.colors[color]);
  let processedColor = processColor(`${color}`, theme.colors[`${color}`]);

  const textColors = toPairs(omit(theme.textColors, 'transparent'))
    .map(colorArr => [`${colorArr[0]}`, wcagGrade(colorArr[1], colorData.hex)])
    .filter(arr => arr[1] !== 'Low Contrast');
  const TextColor = textColors.filter(arr => arr[1] === 'AAA');
  const idealTextColor = TextColor.length
    ? TextColor[0]
    : textColors.filter(arr => arr[1] === 'AA Large')[0];

  let shades = (
    <div
      className={`flex items-center justify-between w-full h-16  bg-${color} font-body align-middle text-${
        color == 'white' || color == 'lightGrey' ? 'black' : 'white'
      } px-12 leading-loose `}
    >
      <small className="inline-block font-bold tracking-wide pb-4">{color.toUpperCase()}</small>
      <ColorValues color={colorData} />
    </div>
  );

  return (
    <div className="ColorSwatch container overflow-hidden w-1/3 p-20">
      <h3 className="text-center">{color}</h3>
      <div className="w-full overflow-hidden rounded-sm">{shades}</div>

      {children}
      <div className="group w-full my-12 rounded-sm ">
        <h5 className="text-center pb-4">A11y Contrasts</h5>
        <small className={`block w-full h-8  p-4 bg-${colorData.key} text-${idealTextColor}`}>
          <span className="inline-block leading-normal float-left">
            text-
            {idealTextColor[0]}{' '}
          </span>
          <span className="inline-block leading-normal float-right">{idealTextColor[1]}</span>
        </small>
        <div className="ColorSwatch--a11y hidden group-hover:block">
          {textColors.map(colorArr => (
            <small
              key={colorArr[0]}
              className={`block w-full h-8  p-4 bg-${colorData.key} text-black text-${colorArr[0]}`}
            >
              <span className="inline-block leading-normal float-left">
                text-
                {colorArr[0]}{' '}
              </span>
              <span className="inline-block leading-normal float-right">{colorArr[1]}</span>
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Swatch;
