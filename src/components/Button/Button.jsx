/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

/**
 * A Simple rounded button
 */
function Button(props) {
  const { color, disabled, children, outline } = props;

  const normalStyle = [
    'border-transparent',
    'text-white',
    `bg-${color}`,
  ];

  const outlineStlye = [
    [`bg-transparent hover:bg-${color}`],
    [`border border-${color} hover:border-transparent`],
    [`text-${color} hover:text-white`],
  ];

  const disabledStyle = [
    'cursor-not-allowed',
    'opacity-50',
  ];

  const buttonClass = className(
    (outline ? outlineStlye : normalStyle),
    (disabled ? disabledStyle : []),
    'font-medium',
    'm-2',
    'p-2',
    'rounded-full',
  );
  return (
    <button type='button' className={buttonClass}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: propTypes.string,
  children: propTypes.string,
  outline: propTypes.bool,
  disabled: propTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  children: null,
  outline: false,
  disabled: false,
};

export default Button;
