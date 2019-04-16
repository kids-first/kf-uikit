import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
/**
 * Displays badge for labels and stats.
 */
const Badge = ({ className, text, color, loading }) => {
  const badgeColor = color ? `bg-${color}` : null;
  const badgeClass = classes(
    'Badge',
    {
      [badgeColor]: !loading,
      'Badge--loading': loading,
    },
    className,
  );
  return (
    <span className={badgeClass}>
      <span className={loading ? 'invisible' : undefined}>{text}</span>
    </span>
  );
};

Badge.propTypes = {
  /** Any additional classes to be applied to badge */
  className: propTypes.string,
  /** Badge state text */
  text: propTypes.string,
  /** Badge color */
  color: propTypes.string,
  /** If badge is on loading */
  loading: propTypes.bool,
};
Badge.defaultProps = {
  className: null,
  text: '',
  color: null,
  loading: null,
};

export default Badge;
