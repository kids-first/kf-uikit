import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Logo from '../Logo/Logo';
import './Header.css';

/**
 * The common Kids First navigation.
 *
 * Must pass an array of buttons for the navigation bar.
 * Providing alertMessage will include an alert at the top of the header.
 *
 * The header should be included at the top of every Kids First application.
 * It contains common functionality for all of Kids-First that should remain
 * consistent, such as the user drop down and application navigation.
 */
const Header = ({ buttons, alertMessage, children }) => {

  const navClass = className(
    'Header--navigation',
  );

  return (
    <header className='Header'>
      {alertMessage && (
        <div className='Header--alert'>
          {alertMessage}
        </div>
      )}
      <nav className={navClass}>
        <Logo />
        <div className='Navigation--buttons'>
          {buttons ? buttons.map(button => button) : null}
        </div>
        {children}
      </nav>
    </header>
  );
}

Header.propTypes = {
  /** Buttons to display on the navbar */
  buttons: propTypes.node,
  /** Alert message to be displayed on top of the page */
  alertMessage: propTypes.string,
  /** Child elements to display on the navbar */
  children: propTypes.node,
};

Header.defaultProps = {
  buttons: null,
  alertMessage: null,
  children: null,
};

export default Header;
