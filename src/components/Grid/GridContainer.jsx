import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

/**
 * Container for a 12 column css grid
 */
const GridContainer = ({ className, children, collapsed, centered, fullWidth }) => {
  const GridContainerClass = classes(
    'grid-container',
    { 'mx-auto': centered },
    {
      [`grid-container--collapsed${
        collapsed === 'cells' || collapsed === 'rows' ? `-${collapsed}` : ''
      }`]: collapsed !== false,
    },
    { 'grid-container--fullWidth': fullWidth },
    className,
  );

  return <section className={GridContainerClass}>{children}</section>;
};

GridContainer.propTypes = {
  /** Any additional classes to be applied to the button */
  className: PropTypes.string,
  /** Children elements. */
  children: PropTypes.string,
  /** Collapse margins and gutters. */
  collapsed: PropTypes.oneOf([true, 'cells', 'rows']),
  /** wheter or not to apply margin: 0 auto; */
  centered: PropTypes.bool,
  /** wheter or not to apply max-width: 100%; */
  fullWidth: PropTypes.bool,
};

GridContainer.defaultProps = {
  className: '',
  children: null,
  collapsed: false,
  centered: true,
  fullWidth: false,
};

/**
 * @component
 */
export default GridContainer;
