import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserById } from '../../store/users';
import { transformDate } from '../../utils/transformDate';

const ArticleCard = ({ article, mouseOver, mouseLeave, onDelete, isManage = false }) => {
  const user = useSelector(getUserById(article.userId));

  return (
    <div className="column is-one-third">
      <div
        className="card has-shadow card-equal-height"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <div className="card-content">
          <h1 className="title is-size-1">{article.title}</h1>
          <span>
            <p className="is-size-6 is-italic mb-3">
              By {user.name} {transformDate(article.updatedAt)}
            </p>
          </span>
          <p>{article.description}</p>
        </div>
        <footer className="card-footer">
          {isManage ? (
            <>
              <Link
                to={`/articles/${article._id}/edit`}
                className="card-footer-item"
                id="editButton"
              >
                <p className="has-text-grey">Edit</p>
              </Link>
              <Link to="#" className="card-footer-item" id="deleteButton" onClick={() => onDelete(article._id)}>
                <p className="has-text-grey">Delete</p>
              </Link>
            </>
          ) : (
            <Link to={`/articles/${article._id}`} className="card-footer-item">
              <p className="has-text-grey">View</p>
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isManage: PropTypes.bool
};

export default ArticleCard;
