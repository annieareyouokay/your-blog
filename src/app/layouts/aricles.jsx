import React from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../store/articles';

const TAIL_COUNT = 3;

const Articles = () => {
  const articles = useSelector(getArticles());

  let articlesCrop = [];
  if (!articles) {
    return <h1 className="title">Loading</h1>;
  } else {
    articlesCrop = getCrop(articles);
    console.log(articlesCrop);
    function getCrop(articles) {
      const newArticles = [];
      for (let index = 0; index < articles.length; index += TAIL_COUNT) {
        newArticles.push(articles.slice(index, index + TAIL_COUNT));
      }
      return newArticles;
    }
  }

  return articlesCrop.map((arr, index) => {
    return (
      <div className="tile is-ancestor" key={index}>
        {arr.map((a) => {
          return (
            <div className="tile is-parent" key={a.id}>
              <article className="tile is-child box">
                <p className="title">{a.title}</p>
                <p className="subtitle">{a.description}</p>
                <div className="is-flex is-justify-content-space-between">
                  <p className="subtitle is-6">{a.date}</p>
                  <div className="is-flex is-justify-content-flex-end">
                    <button className="button is-primary">More</button>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  });
};

export default Articles;
