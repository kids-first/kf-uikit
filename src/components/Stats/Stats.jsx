/* eslint-disable */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import Stat from './Stat';

const Stats = ({ stats, className, small, transparent }) => {
  const StatsClasses = classes(
    ['Stats--container', 'flex', 'items-center'],
    { small: small, transparent: transparent },
    className,
  );
  return (
    <div className={StatsClasses}>
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && <div key={i} className="Stats--container-divider" />}
          <Stat
            icon={stat.icon}
            label={stat.label}
            metric={stat.metric}
          />
        </Fragment>
      ))}
    </div>
  );
};

Stats.propTypes = {
  /** Array of Stat/Metrics objects to display   */
  stats: propTypes.arrayOf(propTypes.shape({
    /** The icon used for the stat */
    icon: propTypes.string.isRequired,
    /** The label to describe the stat */
    label: propTypes.string,
    /** The actual stat metric */
    metric: propTypes.number.isRequired,
  })),
  /** if set, displays only the icon and metric */
  small: propTypes.bool,
  /** if set, hides the border and background of the Stats-container */
  transparent: propTypes.bool,
};

Stats.defaultProps = {
  stats: [],
  small: false,
  transparent: false,
}
export default Stats;
