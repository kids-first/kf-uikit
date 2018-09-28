import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A linear progress bar of varying color.
 */
const ProgressBar = ({ total, current, color, className }) => {

  const baseClass = classes(
      'ProgressBar',
      className
  );
  const barClass = classes(
    'ProgressBar--bar',
    `ProgressBar--bar-${color}`,
    className
  );

  // Don't allow progress bar to squish too small
  const progress = Math.max(current/total*100, 1.0);

  return (
    <div className={baseClass}>
      <span className='ProgressBar--title'>Number of Files</span>
      <span className='ProgressBar--stat'>
        {current}
        /
        {total}
      </span>
      <div className='ProgressBar--bar ProgressBar--bar-well'>
        <span className={barClass} style={{width: `${progress}%`}} />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  /** The number at which completeness occurs */
  total: propTypes.number,
  /** The current progress */
  current: propTypes.number,
  /** The color of the button. */
  color: propTypes.string,
  /** Any additional classes to be applied to the button */
  className: propTypes.string,
};

ProgressBar.defaultProps = {
  total: 100.0,
  current: 0.0,
  color: 'primary',
  className: null,
};

export default ProgressBar;
