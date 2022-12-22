import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../../components/ui/articleCard';
import Loader from '../../layouts/loader';
import { getArticles } from '../../store/articles';

const TAIL_COUNT = 3;

const ArticlesListPage = () => {
  const articles = useSelector(getArticles());

  let articlesCrop = [];
  if (!articles) {
    return <Loader />;
  } else {
    articlesCrop = getCrop(articles);
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
      <div
        className="tile is-ancestor is-flex is-flex-direction-row"
        key={index}
      >
        {arr.map((a) => {
          return (
            <div
              className="tile is-parent is-4 is-flex is-flex-direction-column"
              key={a.id}
            >
              <ArticleCard article={a} />
            </div>
          );
        })}
      </div>
    );
  });
};

export default ArticlesListPage;
