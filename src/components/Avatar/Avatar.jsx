import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
import md5 from 'md5';
import { trim } from 'lodash';
/**
 * Displays user profile avatar image with/withour user name
 */
const Avatar = ({ className, size, userName, imgUrl, userEmail }) => {
  const gravatarUrl = userEmail
    ? `https://www.gravatar.com/avatar/${md5(trim(userEmail.toLowerCase()))}?s=${size}`
    : null;
  const avatarClass = classes('Avatar', className);
  const avatarSize =
    size >= 20 && size <= 200 ? { height: size, width: size } : { height: 40, width: 40 };
  const avatarLetterSize = size >= 20 && size <= 200 ? { fontSize: size * 0.8 } : { fontSize: 32 };
  const name = userName ? userName.charAt(0) : '···';
  return (
    <div className={avatarClass} style={avatarSize}>
      {imgUrl || gravatarUrl ? (
        <img className="Avatar-img" src={imgUrl || gravatarUrl} alt={`${userName} avatar`} />
      ) : (
        <span style={avatarLetterSize}>{name}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  /** Any additional classes to be applied to avater */
  className: propTypes.string,
  /** User name (show initial of no image given) */
  userName: propTypes.string,
  /** User email (used to fetch gravatar) */
  userEmail: propTypes.string,
  /** User gravatar image URL */
  imgUrl: propTypes.string,
  /** Size of the avatar (range: 20 - 200, default: 40) */
  size: propTypes.number,
};
Avatar.defaultProps = {
  className: null,
  userName: null,
  userEmail: null,
  imgUrl: null,
  size: 40,
};

export default Avatar;
