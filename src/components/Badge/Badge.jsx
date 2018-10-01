import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A Simple rounded button
 */
const Badge = ({ size, color, className, children }) => {

  const buttonClass = classes(
    'Badge',
    {[`Badge--${size}`]: ['small', 'large'].includes(size)},
    `Badge--${color}`,
    className
  );
  return (
    <span className={buttonClass}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  /** The size of the button */
  size: propTypes.string,
  /** The color of the button. */
  color: propTypes.string,
  /** Any additional classes to be applied to the button */
  className: propTypes.string,
  /** Children elements. */
  children: propTypes.string,
};

Badge.defaultProps = {
  size: 'default',
  color: 'primary',
  className: null,
  children: null,
};

export default Badge;
