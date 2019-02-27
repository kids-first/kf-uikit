import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import logoFull from './logo_full.svg';
import logo from './logo.svg';

/**
 * The Kids first logo.
 * May be `full` with `Kids First Data Resource` titling or
 * `logo mark` with only the art asset.
 */
const Logo = ({kind, className}) => {

  const logoAsset = kind === 'logo mark' ? logo : logoFull;
  const logoClasses = classes(
      className,
      'Logo--img',
  )
  const alt = 'Kids First Data Resource Center logo';

  return (
    <div className='Logo'>
      <img
        className={logoClasses}
        alt={alt}
        src={logoAsset}
      />
      <h1 className='Logo--text text-screen-reader'>{alt}</h1>
    </div>
  )
}

Logo.propTypes = {
  /** The type of logo */
  kind: propTypes.oneOf(['full', 'logo mark']),
  /** Any additional classes to be applied to the logo */
  className: propTypes.string,
};

Logo.defaultProps = {
  kind: 'full',
  className: null,
};

export default Logo;
