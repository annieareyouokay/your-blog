import React from 'react';
import { useParams } from 'react-router-dom';
import AddArticlePage from '../page/addArticlePage';
import ArticlePage from '../page/articlePage/articlePage';
import ArticlesListPage from '../page/articlesListPage';
import EditArticlePage from '../page/editArticlePage/editArticlePage';

const Articles = () => {
  const { articleId, edit, add } = useParams();
  console.log(add);
  if (articleId) {
    if (edit) {
      return <EditArticlePage />;
    } else {
      return <ArticlePage articleId={articleId} />;
    }
  } else if (add) {
    return <AddArticlePage />;
  } else {
    return <ArticlesListPage />;
  }
};

export default Articles;
