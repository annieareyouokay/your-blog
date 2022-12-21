import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './userCard';

const ArticleCard = ({ article }) => {
  return (
    <div className="card m-2 box">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={article.img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <UserCard userId={article.userId} />

        <div className="content">
          <p>{article.description}</p>
          <br />
        </div>
      </div>
      <div className="is-flex is-justify-content-space-between">
        <time className="is-flex is-align-self-flex-end" dateTime="2016-1-1">
          11:09 PM - 1 Jan 2016
        </time>
        <button className="button is-primary">More</button>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleCard;
