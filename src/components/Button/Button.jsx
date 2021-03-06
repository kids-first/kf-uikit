import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import Icon from '../Icon/Icon';
import iconNames from '../Icon/Icons';
/**
 * A Simple rounded button
 */
const Button = ({ size, color, disabled, onClick, type, icon, className,
  children }) => {

  const buttonClass = classes(
    'Button',
    `Button--${size}`,
    {[`Button--${color}`]: ['primary', 'secondary'].includes(color)},
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
      {icon && <Icon kind={icon} />}
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
}

Button.propTypes = {
  /** The size of the button */
  size: propTypes.oneOf(['default', 'large']),
  /** The color of the button. */
  color: propTypes.oneOf(['default', 'primary', 'secondary']),
  /** Whether the button is disabled */
  disabled: propTypes.bool,
  /** A function to perform onClick */
  onClick: propTypes.func,
  /** The html type of button */
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  /** Any additional classes to be applied to the button */
  className: propTypes.string,
  /** The icon shown on button */
  icon: propTypes.oneOf(Object.keys(iconNames)),
  /** The text shown on button  */
  children: propTypes.string,
};

Button.defaultProps = {
  size: 'default',
  color: 'default',
  disabled: false,
  onClick: () => {},
  type: 'button',
  className: null,
  children: null,
  icon: null,
};

export default Button;
