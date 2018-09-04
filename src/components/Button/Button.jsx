import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import './Button.css';

/**
 * A Simple rounded button
 */
const Button = ({ size, color, outline, disabled, children }) => {

  const buttonClass = className(
    'Button',
    {[`Button--${size}`]: ['small', 'large'].includes(size)},
    `Button${outline ? '--outline' : ''}--${color}`,
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
  /** Children elements. */
  children: propTypes.string,
};

Button.defaultProps = {
  size: 'default',
  color: 'primary',
  outline: false,
  disabled: false,
  children: null,
};

export default Button;
