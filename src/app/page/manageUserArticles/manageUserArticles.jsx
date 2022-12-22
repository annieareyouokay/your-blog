import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../layouts/loader';
import { getArticlesByUserId } from '../../store/articles';

const ManageUserArticles = () => {
  const id = '1';
  const articles = useSelector(getArticlesByUserId(id));

  if (!articles) {
    return <Loader />;
  }

  return (
    <div className="container is-max-widescreen">
      <div className="title is-ancestor box">
        <p className="title">Manage articles</p>
        <div className="tile is-vertical is-parent">
          {articles.map((a) => {
            return (
              <div className="tile is-child box " key={a.id}>
                <div className="is-flex is-justify-content-end">
                  <button className="delete is-medium has-background-danger"></button>
                </div>
                <p className="title">{a.title}</p>
                <p>{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageUserArticles;
