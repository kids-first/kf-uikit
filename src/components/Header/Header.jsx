import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Logo from '../Logo/Logo';
import './Header.css';

/**
 * The common Kids First navigation.
 * Must specify button actions to use
 */
const Header = ({ buttons, children }) => {

  const navClass = className(
    'Navigation',
  );

  return (
    <header>
      <nav className={navClass}>
        <Logo />
        <div className='Navigation--buttons'>
          {buttons.map(button => button)}
        </div>
        {children}
      </nav>
    </header>
  );
}

Header.propTypes = {
  /** Buttons to display on the navbar */
  buttons: propTypes.node,
  /** Child elements to display on the navbar */
  children: propTypes.node,
};

Header.defaultProps = {
  buttons: null,
  children: null,
};

export default Header;
