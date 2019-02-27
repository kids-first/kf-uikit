import React from 'react';
import propTypes from 'prop-types';
import * as theme from '../../tailwind.js';
import { processColor, wcagGrade } from '../../src/utils/colors';
import { compact, toPairs, omit } from 'lodash';
const ColorValues = ({ color }) => (
  <small className="group inline-block h-full float-right text-right">
    <p className='leading-tight'>{color.hex}</p>
    <p className='leading-tight mt-0'>
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
      className={`block w-full h-16  bg-${color} font-body align-middle text-${
        color == 'white' ? 'black' : 'white'
      } px-2`}
      style={{lineHeight: '4rem'}}
    >
      <small className="inline-block float-left font-bold tracking-wide">
        {color.toUpperCase()}
      </small>
      <ColorValues color={colorData} />
    </div>
  );

  return (
    <div className="container overflow-hidden w-1/3 p-3">
      <h3 className="text-center">{color}</h3>
      <div className="w-full overflow-hidden rounded-sm">{shades}</div>

      {children}
      <div className="group w-full my-2 rounded-sm ">
        <h5 className="text-center">A11y Contrasts</h5>
        <small className={`block w-full h-8  p-2 bg-${colorData.key} text-${idealTextColor}`}>
          <span className="inline-block leading-normal float-left">
            text-
            {idealTextColor[0]}{' '}
          </span>
          <span className="inline-block leading-normal float-right">{idealTextColor[1]}</span>
        </small>
        <div className="hidden group-hover:block">
          {textColors.map(colorArr => (
            <small
              className={`block w-full h-8  p-2 bg-${colorData.key} text-black text-${colorArr[0]}`}
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
