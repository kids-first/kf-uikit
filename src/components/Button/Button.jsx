import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import './_button.scss';

/**
 * A simple button
 */
export class Button extends React.Component {
  attrs() {
    const {
      className,
      component,
      inverse,
      onClick,
      size,
      variation,
      ...props
    } = this.props;

    const attrs = {
      className: this.classNames(),
      ...props
    };

    if (this.props.onClick) {
      attrs.onClick = this.handleClick.bind(this);
    }

    return attrs;
  }

  classNames() {
    let variationClass =
      this.props.variation && `button-${this.props.variation}`;
    let disabledClass = this.props.disabled && 'disabled';


    return classNames(
      'button',
      disabledClass,
      !disabledClass && variationClass,
      this.props.size && `${this.props.size}`,
      this.props.color && `bg-${this.props.color}`,
      this.props.className
    );
  }

  handleClick(e) {
    if (!this.props.disabled) {
      this.props.onClick(e);
    }
  }

  render() {
    const attrs = this.attrs();
    let ComponentType = 'button';

    if (this.props.component) {
      ComponentType = this.props.component;
    } else if (this.props.href) {
      ComponentType = 'a';
      delete attrs.disabled;
      delete attrs.type;
    }

    return <ComponentType {...attrs}>{this.props.children}</ComponentType>;
  }
}

Button.defaultProps = { type: 'button', color: 'primary' };
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  inverse: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'big']),
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'info', 'warn']),
  variation: PropTypes.string
};

export default Button;
