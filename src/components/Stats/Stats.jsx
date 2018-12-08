/* eslint-disable */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import Stat from './Stat';

const Stats = ({ stats, className, small, transparent, ...props }) => {
  const StatsClasses = classes(
    ['Stats-container', 'flex', 'items-center'],
    { small: small ? true : false, transparent: transparent ? true : false },
    className,
  );
  return (
    <div className={StatsClasses}>
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && <div key={i} className="Stats-container-divider" />}
          <Stat {...props} {...stat} />
        </Fragment>
      ))}
    </div>
  );
};

Stats.displayName = 'Stats';

Stats.propTypes = {
  /** Array of Stat/Metrics objects to display   */
  stats: propTypes.array,
  /** if set, displays only the icon and metric */
  small: propTypes.bool,
  /** if set, hides the border and background of the Stats-container */
  transparent: propTypes.bool,
};

export default Stats;
