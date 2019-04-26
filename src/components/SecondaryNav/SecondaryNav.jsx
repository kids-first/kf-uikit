import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
/**
 * Secondary navigation typically used under the header
 *
 * Must pass an array of NavLinks for the navigation bar.
 * Each SecondaryNavLink can take active, onNavClick as props, and {tabText}
 * as children.
 * `<SecondaryNavLink key={key} active={ifActive} onNavClick={() => {}} href={herf}>`
 * `{tabText}`
 * `</SecondaryNavLink>`
 */
const SecondaryNav = ({ buttons, className }) => {
  const navClass = classes('SecondaryNav', className);
  return (
    <nav className={navClass}>
      <ul className="SecondaryNav--list">{buttons ? buttons.map(button => button) : null}</ul>
    </nav>
  );
};

SecondaryNav.propTypes = {
  /** Any additional classes to be applied to secondary navbar */
  className: propTypes.string,
  /** NavLinks to display on the navbar */
  buttons: propTypes.node,
};

SecondaryNav.defaultProps = {
  className: null,
  buttons: null,
};

export default SecondaryNav;
