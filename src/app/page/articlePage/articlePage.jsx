import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getArticleById } from '../../store/articles';

const ArticlePage = ({ articleId }) => {
  console.log(articleId);
  const article = useSelector(getArticleById(articleId));
  console.log(article);
  if (article) {
    return (
      <div className="container">
        <div className="tile-is-ancestor">
          <div className="tile is-parent box">
            <div className="tile is-child">
              <div className="content">
                <h1>{article.title}</h1>
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 className="title">Loading...</h1>;
  }
};

ArticlePage.propTypes = {
  articleId: PropTypes.string.isRequired
};

export default ArticlePage;
