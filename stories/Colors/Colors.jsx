import React from 'react';
import propTypes from 'prop-types';

/**
 * A basic square swatch to display a color
 */
function Swatch(props) {
  const { color, children } = props;
  const shades = ['-darkest', '-darker', '-dark', '',
                  '-light', '-lighter', '-lightest'].map((shade) => (
    <div className={`bg-${color}${shade} w-4 h-32 inline-block`} />
  ));
  return (
    <div className="container w-32 m-3 text-center">
      {shades}
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
