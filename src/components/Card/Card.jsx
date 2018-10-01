import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';

/**
 * A Simple card
 */
const Card = ({ className, title, children }) => {

  const cardClass = classes(
    'Card',
    className,
  );

  return (
    <div className={cardClass}>
      {React.isValidElement(title) ? (
        <span className='Card--title'>{title}</span>
      ) : (
        <h2 className='Card--title text-truncate' title={title}>{title}</h2>
      )}
      <hr />
      {children}
    </div>
  );
}

Card.propTypes = {
  /** Additonal css classes to be applied to the card */
  className: propTypes.string,
  /** Title of the card */
  title: propTypes.oneOfType([propTypes.element, propTypes.string]),
  /** Child elements */
  children: propTypes.node,
};

Card.defaultProps = {
  className: null,
  title: null,
  children: null,
};

export default Card;
