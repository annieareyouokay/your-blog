import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/loader';
import { getArticlesByUserId } from '../../store/articles';

const ManageUserArticles = () => {
  const id = '1';
  const articles = useSelector(getArticlesByUserId(id));

  if (!articles) {
    return <Loader />;
  }

  return (
    <div className="container is-max-widescreen mt-3">
      <div className="tile is-vertical is-ancestor mb-3">
        <div className="tile is-parent is-flex is-justify-content-space-between">
          <p className="title has-text-black">Manage articles</p>
          <Link className="button is-info" to='/articles/add'>
            Add article{' '}
            <span className="icon is-medium ml-2">
              <ion-icon name="add-outline"></ion-icon>
            </span>
          </Link>
        </div>
        {articles.map((a) => {
          return (
            <div className="tile is-parent" key={a.id}>
              <article className="tile box is-child notification">
                <div className="content">
                  <div className="is-flex is-justify-content-end">
                    <button className="delete is-medium has-background-danger"></button>
                  </div>
                  <p className="title has-text-black">{a.title}</p>
                  <p className="has-text-black">{a.description}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageUserArticles;
