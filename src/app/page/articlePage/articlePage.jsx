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
      <div className="tile-is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification has-background-primary-light">
            <div className="content">
              <figure className="image is-5by3">
                <img src={article.img}></img>
              </figure>
              <UserCard userId={article.userId} />
              <h1 className='has-text-black'>{article.title}</h1>
              <p className='has-text-black'>{article.content}</p>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </article>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ArticlePage;
