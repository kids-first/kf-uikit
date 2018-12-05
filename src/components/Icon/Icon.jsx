import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import paths from './Icons';



/**
 * An svg icon whose path may be specified with the 'kind' prop.
 */
const Icon = ({ kind, width, height, fill, className }) => {

  const iconClass = classes(
    'Icon',
    className,
    fill
  );

  return (
    <svg
      className={iconClass}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <title>
        icon-
        {kind}
      </title>
      <g id={`${kind}-icon`} data-name={`${kind} icon`}>
        <path
          d={paths[kind]}
          id="path"
          width="100%"
          height="100%"
          transform="translate(0 0)"
        />
      </g> 

    </svg>
  );
}

Icon.propTypes = {
  /** Additonal css classes to be applied to the card */
  className: propTypes.string,
  /** The icon to display */
  kind: propTypes.oneOf(Object.keys(paths)).isRequired,
  /** Width of the icon */
  width: propTypes.number,
  /** Height of the icon */
  height: propTypes.number,
  /** Fill of the icon */
  fill: propTypes.string,
};

Icon.defaultProps = {
  className: null,
  width: 24,
  height: 24,
  fill: 'text-grey-dark',
};

export default Icon;
