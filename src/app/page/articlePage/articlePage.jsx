import React from 'react';
import { useSelector } from 'react-redux';
import { getArticleById } from '../../store/articles';
import UserCard from '../../components/ui/userCard';
import { useParams } from 'react-router-dom';
import Loader from '../../layouts/loader';

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useSelector(getArticleById(articleId));

  if (article) {
    return (
      <div className="container is-max-desktop">
        <div className="tile-is-ancestor">
          <div className="tile is-parent box">
            <div className="tile is-child">
              <div className="content">
                <figure className="image is-5by3">
                  <img src={article.img}></img>
                </figure>
                <UserCard userId={article.id} />
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ArticlePage;
