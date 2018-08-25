import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import './Button.css';

/**
 * A Simple rounded button
 */
function Button(props) {
  const { color, disabled, children, outline } = props;

  const normalStyle = [
    `bg-${color}`,
    `hover:bg-${color}-dark`,
  ];

  const outlineStlye = [
    [`bg-transparent hover:bg-${color}`],
    [`border border-${color} hover:border-transparent`],
    [`text-${color} hover:text-white`],
  ];


  const buttonClass = className(
    (outline ? outlineStlye : normalStyle),
    'button',
  );
  return (
    <button type='button' className={buttonClass} disabled={disabled}>
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
