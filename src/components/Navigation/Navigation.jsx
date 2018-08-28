import React from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Logo from '../Logo/Logo';
import './Navigation.css';

/**
 * The common Kids First navigation.
 * Must specify button actions to use
 */
const Navigation = ({ buttons, children }) => {

  const navClass = className(
    'Navigation',
  );

  return (
    <nav className={navClass}>
      <Logo />
      <div className='flex items-center justify-start w-full'>
        {buttons.map(button => button)}
      </div>
      {children}
    </nav>
  );
}

Navigation.propTypes = {
  /** Buttons to display on the navbar */
  buttons: propTypes.node,
  /** Child elements to display on the navbar */
  children: propTypes.node,
};

Navigation.defaultProps = {
  buttons: null,
  children: null,
};

export default Navigation;
