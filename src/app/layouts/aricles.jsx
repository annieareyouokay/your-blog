import React from 'react';
import { useParams } from 'react-router-dom';
import ArticlePage from '../page/articlePage/articlePage';
import ArticlesListPage from '../page/articlesListPage';
import EditArticlePage from '../page/editArticlePage';

const Articles = () => {
  const { articleId, edit } = useParams();
  return articleId ? (
    edit ? (
      <EditArticlePage />
    ) : (
      <ArticlePage articleId={articleId} />
    )
  ) : (
    <ArticlesListPage />
  );
};

export default Articles;
