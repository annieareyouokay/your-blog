import React from 'react';
import { useSelector } from 'react-redux';
import { getArticleById } from '../../store/articles';
import UserCard from '../../components/ui/userCard';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../../layouts/loader';
import { transformDate } from '../../utils/transformDate';

const ArticlePage = () => {
  const history = useHistory();
  const { articleId } = useParams();

  const article = useSelector(getArticleById(articleId));

  const handleBackButton = () => {
    history.goBack();
  };

  if (article) {
    return (
      <>
        <div className="hero is-small has-background-primary-light">
          <section className="section">
            <div className="level">
              <div className="level-left">
                <p className="level-item">
                  <button
                    className="button is-success"
                    onClick={handleBackButton}
                  >
                    <ion-icon name="caret-back-outline"></ion-icon>
                  </button>
                </p>
                <div className="level-item">
                  <h1 className="title is-size-1 mb-1">{article.title}</h1>
                </div>
              </div>
              <div className="level-right is-italic">
                <div className="level-item">
                  <UserCard userId={article.userId} />
                </div>
                <span className="level-item">
                  {transformDate(article.updatedAt)}
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="hero is-fullheight is-align-content-start">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content text-has-centered">
                <div className="container mt-6">
                  <p className="subtitle is-size-5 is-italic">
                    {article.description}
                  </p>
                </div>

                <div className="container mt-6 is-size-4">
                  <p>{article.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default ArticlePage;
