/* eslint-disable */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import Icon from '../Icon/Icon';

const Stat = ({ icon = '', label = '', metric = 0, metricFormatter, LoadingSpinnerComponent }) => {
  return (
    <div className="Stat Stat--container">
      <Icon className="Stat--icon" {...label} kind={icon} />
      <div className="Stat--metric">{metricFormatter ? metricFormatter(metric) : metric}</div>
      <div className="Stat--label">{label}</div>
    </div>
  );
};

Stat.propTypes = {
  /** Name of Entity  */
  label: propTypes.string.isRequired,
  /** 'kind' prop for Icon compoennt */
  icon: propTypes.string.isRequired,
  /** number to display */
  metric: propTypes.number.isRequired,
  /** function that receives and returns the stat number */
  metricFormatter: propTypes.function,
};

Stat.defaultProps = {
  label: 'Default',
  icon: 'graph',
  metric: 0,
};

export default Stat;
