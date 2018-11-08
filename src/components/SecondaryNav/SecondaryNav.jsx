import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import './SecondaryNav.css';


/**
 * A navigation item to be used in the secondary nav bar
 *
 */
export const NavLink = ({ active, children }) => {

  const linkClass = className({
    'SecondaryNav--link': true,
    'SecondaryNav--link-active': active,
  });

  return (
    <li className={linkClass}>{children}</li>
  );
}

NavLink.propTypes = {
  /** Child elements to display on the navbar */
  children: propTypes.node,
  /** Whether the link is active */
  active: propTypes.bool,
};

NavLink.defaultProps = {
  children: null,
  active: false,
};


/**
 * Secondary navigation typically used under the header
 *
 * Must pass an array of NavLinks for the navigation bar.
 * Each NavLink should contain an anchor with appropriate href, or a react
 * router Link or equivelant.
 */
const SecondaryNav = ({ buttons }) => {

  const navClass = className(
    'SecondaryNav--navigation',
  );

  return (
    <nav className={navClass}>
      <ul>
        {buttons ? buttons.map(button => button) : null}
      </ul>
    </nav>
  );
}

SecondaryNav.propTypes = {
  /** NavLinks to display on the navbar */
  buttons: propTypes.node,
};

SecondaryNav.defaultProps = {
  buttons: null,
};

export default SecondaryNav;
