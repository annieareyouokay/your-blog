import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
// import ArticlesLoader from '../hoc/articlesLoader';
import ArticlePage from '../page/articlePage/articlePage';
import ArticlesListPage from '../page/articlesListPage';
import EditArticlePage from '../page/editArticlePage/editArticlePage';
import { getArticleById } from '../store/articles';
import { getCurrentUserId } from '../store/users';

const Articles = () => {
  const params = useParams();
  const { articleId, edit } = params;
  const currentUserId = useSelector(getCurrentUserId());
  const article = useSelector(getArticleById(articleId));

  return (
    <section className="section mt-6">
      {articleId ? (
        edit ? (
          (article.userId === currentUserId ? (
            <EditArticlePage />
          ) : (
            <Redirect to={`/articles`} />
          ))
        ) : (
          <ArticlePage />
        )
      ) : (
        <ArticlesListPage />
      )}
    </section>
  );
};

export default Articles;
