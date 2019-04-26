import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import Icon from '../Icon/Icon';
/**
 * The dropdown menu allow user to customize the button text, icon and action.
 */
const Dropdown = ({ className, items, children, open }) => {
  const dropdownClass = classes('Dropdown', { 'Dropdown--open': open }, className);
  return (
    <div className={dropdownClass}>
      <button type="button" className="Dropdown--button" tabIndex="0">
        {children}
        <Icon className="mt-8 ml-12" width={16} height={16} kind="chevron-down" />
      </button>
      <div className="Dropdown--container">
        <ul className="Dropdown--list">
          {items.map(item => (
            <li key={item.value}>
              {item.type === 'button' ? (
                <button
                  onClick={item.onClick}
                  type="button"
                  className="Dropdown--item"
                  tabIndex="0"
                >
                  {item.icon && <Icon width={12} height={12} kind={item.icon} />}
                  {item.value}
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="Dropdown--item inline-block"
                  tabIndex="0"
                >
                  {item.icon && <Icon width={12} height={12} kind={item.icon} />}
                  {item.value}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  /** Any additional classes to be applied to avater */
  className: propTypes.string,
  /** The label on dropdown button  */
  children: propTypes.node,
  /** Array of dropdown objects to display */
  items: propTypes.arrayOf(
    propTypes.shape({
      /** The icon used for the dropdown */
      icon: propTypes.string,
      /** The label to describe the dropdown */
      value: propTypes.string,
      /** The action to perform when the dropdown button is clicked */
      onClick: propTypes.func,
      /** type of DOM element to render (defaults to link) */
      type: propTypes.oneOf(['button', 'link']),
      /** if link, location of link */
      href: propTypes.string,
    }),
  ),
  /** Indicating if the dropdown menu is open */
  open: propTypes.bool,
};
Dropdown.defaultProps = {
  className: null,
  children: null,
  items: [],
  open: false,
};

export default Dropdown;
