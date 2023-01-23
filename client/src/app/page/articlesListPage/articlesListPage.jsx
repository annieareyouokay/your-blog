import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../../components/ui/articleCard';
import Loader from '../../layouts/loader';
import { getArticles } from '../../store/articles';

const TAIL_COUNT = 3;
const PRIMARY_BACKGROUND_COLOR = 'has-background-primary-light';
const INFO_BACKGROUND_COLOR = 'has-background-link-light';

const ArticlesListPage = () => {
  const articles = useSelector(getArticles());

  let articlesCrop = [];
  if (!articles) {
    return <Loader />;
  } else if (articles && !articles.length) {
    return (
      <section className="hero is-fullheight is-info">
        <div className="hero-body">
          <p className="title is-size-1">Have no posts here..</p>
        </div>
      </section>
    );
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

  const handleMouseOver = (e) => {
    const element = e.target;
    const cardElement = element.closest('.card');
    const cardFooterItemElement =
      cardElement.querySelector('.card-footer-item');
    !cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.add(PRIMARY_BACKGROUND_COLOR);
    !cardFooterItemElement.classList.contains(INFO_BACKGROUND_COLOR) &&
      cardFooterItemElement.classList.add(INFO_BACKGROUND_COLOR);
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    const cardElement = element.closest('.card');
    const cardFooterItemElement =
      cardElement.querySelector('.card-footer-item');
    cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.remove(PRIMARY_BACKGROUND_COLOR);
    cardFooterItemElement.classList.contains(INFO_BACKGROUND_COLOR) &&
      cardFooterItemElement.classList.remove(INFO_BACKGROUND_COLOR);
  };

  return (
    <div className="container">
      {articlesCrop.map((arr, index) => {
        return (
          <div className="columns" key={index}>
            {arr.map((a) => {
              return (
                <ArticleCard
                  article={a}
                  key={a._id}
                  mouseOver={handleMouseOver}
                  mouseLeave={handleMouseLeave}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesListPage;
