import React from 'react';
import PropTypes from 'prop-types';
import { getUserById } from '../../store/users';
import { useSelector } from 'react-redux';
import Loader from '../../layouts/loader';

const UserCard = ({ userId }) => {
  const user = useSelector(getUserById(userId));

  if (user) {
    return (
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img className="is-rounded" src={user.image} alt="avatar"></img>
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{user.name}</p>
          <p className="subtitle is-6">{`@${user.name.replace(' ', '')}`}</p>
        </div>
      </div>
    );
  } else {
    return <Loader width="60" height="60" />;
  }
};

UserCard.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserCard;
