import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A Simple rounded button
 */
const Button = ({ size, color, outline, disabled, className, children }) => {

  const buttonClass = classes(
    'Button',
    {[`Button--${size}`]: ['small', 'large'].includes(size)},
    `Button${outline ? '--outline' : ''}--${color}`,
    className
  );
  return (
    <button type='button' className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  /** The size of the button */
  size: propTypes.string,
  /** The color of the button. */
  color: propTypes.string,
  /** Whether the button is an outline only, or solid. */
  outline: propTypes.bool,
  /** Whether the button is disabled */
  disabled: propTypes.bool,
  /** Any additional classes to be applied to the button */
  className: propTypes.string,
  /** Children elements. */
  children: propTypes.string,
};

Button.defaultProps = {
  size: 'default',
  color: 'primary',
  outline: false,
  disabled: false,
  className: null,
  children: null,
};

export default Button;
