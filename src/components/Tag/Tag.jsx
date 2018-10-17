import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A Simple rounded button
 */
const Tag = ({ size, color, className, children }) => {

  const buttonClass = classes(
    'Tag',
    {[`Tag--${size}`]: ['small', 'large'].includes(size)},
    `Tag--${color}`,
    className
  );
  return (
    <span className={buttonClass}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  /** The size of the button */
  size: propTypes.string,
  /** The color of the button. */
  color: propTypes.string,
  /** Any additional classes to be applied to the button */
  className: propTypes.string,
  /** Children elements. */
  children: propTypes.string,
};

Tag.defaultProps = {
  size: 'default',
  color: 'primary',
  className: null,
  children: null,
};

export default Tag;
