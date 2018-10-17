import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Logo from '../Logo/Logo';
import './Header.css';

/**
 * The common Kids First navigation.
 *
 * Must pass an array of buttons for the navigation bar.
 *
 * The header should be included at the top of every Kids First application.
 * It contains common functionality for all of Kids-First that should remain
 * consistent, such as the user drop down and application navigation.
 */
const Header = ({ buttons, logo, children }) => {
  const { logoHref, onLogoClick } = logo;

  const navClass = className(
    'Header--navigation',
  );

  return (
    <header className='Header'>
      <nav className={navClass}>
        <a href={logoHref} onClick={() => onLogoClick()}>
          <Logo className='Header--logo' />
        </a>
        <div className='Navigation--buttons'>
          {buttons ? buttons.map(button => button) : null}
        </div>
        {children}
      </nav>
    </header>
  );
}

Header.propTypes = {
  logo: propTypes.shape({
    /** Url for the Logo to redirect to */
    logoHref: propTypes.string,
    /** Action to perform when the logo is clicked */
    onLogoClick: propTypes.func,
  }),
  /** Buttons to display on the navbar */
  buttons: propTypes.node,
  /** Child elements to display on the navbar */
  children: propTypes.node,
};

Header.defaultProps = {
  logo: {
    logoHref: '#',
    onLogoClick: () => {},
  },
  buttons: null,
  children: null,
};

export default Header;
