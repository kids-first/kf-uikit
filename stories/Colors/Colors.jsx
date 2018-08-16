import React from 'react';
import propTypes from 'prop-types';

/**
 * A basic square swatch to display a color
 */
function Swatch(props) {
  const { color, children } = props;
  return (
    <div className="container w-32 m-3 text-center">
      <div className={`bg-${color} w-32 h-32`} />
      <p>
        <h3>{color}</h3>
        {children}
      </p>
    </div>
  );
}

Swatch.propTypes = {
  color: propTypes.string,
  children: propTypes.element,
};

Swatch.defaultProps = {
  color: 'primary',
  children: null,
};

export default Swatch;
