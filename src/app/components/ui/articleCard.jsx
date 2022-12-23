import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './userCard';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <article className="tile is-child box has-background-primary-light">
      <UserCard userId={article.userId} />
      <div className="content">
        <figure className="image is-4by3">
          <img src={article.img} alt="Placeholder image" />
        </figure>
        <div className="content">
          <p>{article.description}</p>
        </div>
        <div className="is-flex is-justify-content-space-between">
          <time
            className="is-flex is-align-self-flex-end"
            dateTime={article.date}
          >
            {article.date}
          </time>
          <Link to={`/articles/${article.id}`} className="button is-primary">
            More
          </Link>
        </div>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleCard;
