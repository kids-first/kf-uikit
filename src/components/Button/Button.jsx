import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A Simple rounded button
 */
const Button = ({ size, color, outline, disabled, onClick, type, className,
  children }) => {

  const buttonClass = classes(
    'Button',
    {[`Button--${size}`]: ['small', 'large'].includes(size)},
    `Button${outline ? '--outline' : ''}--${color}`,
    className
  );
  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
    /* eslint-enable react/button-has-type */
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
  /** A function to perform onClick */
  onClick: propTypes.func,
  /** The html type of button */
  type: propTypes.oneOf(['button', 'submit', 'reset']),
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
  onClick: () => {},
  type: 'button',
  className: null,
  children: null,
};

export default Button;
