import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
/**
 * A navigation link item to be used inside the secondary nav bar
 *
 */
const SecondaryNavLink = ({ href, active, children, onNavClick, className }) => {
  const linkClass = classes(
    ['SecondaryNav--link', { 'SecondaryNav--link-active': active }],
    className,
  );
  return (
    <li className={linkClass}>
      <a href={href} onClick={onNavClick}>
        {children}
      </a>
    </li>
  );
};

SecondaryNavLink.propTypes = {
  /** Any additional classes to be applied to secondary navbar button */
  className: propTypes.string,
  /** Child elements to display on the navbar */
  children: propTypes.node,
  /** The url to navigate to */
  href: propTypes.string,
  /** A function to perform onClick */
  onNavClick: propTypes.func,
  /** Whether the link is active */
  active: propTypes.bool,
};

SecondaryNavLink.defaultProps = {
  className: null,
  children: null,
  active: false,
  onNavClick: () => {},
  href: null,
};

export default SecondaryNavLink;
