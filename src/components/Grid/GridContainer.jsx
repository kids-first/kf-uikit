import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

/**
 *  Fluidly responsive 960px, 12 cell grid system container based on the css grid spec.
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
  /** Any additional classes to be applied to the gridContainer */
  className: PropTypes.string,
  /** Children elements. */
  children: PropTypes.node,
  /** Collapse margins and gutters. */
  collapsed: PropTypes.oneOf([true, false, 'cells', 'rows']),
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


export default GridContainer;
