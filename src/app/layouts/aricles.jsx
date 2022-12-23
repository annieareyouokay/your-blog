import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddArticlePage from '../page/addArticlePage';
import ArticlePage from '../page/articlePage/articlePage';
import ArticlesListPage from '../page/articlesListPage';
import EditArticlePage from '../page/editArticlePage/editArticlePage';

const Articles = () => {
  return (
    <div className='container is-widescreen'>
      <Switch>
        <Route exact path="/articles/add" component={AddArticlePage} />
        <Route path="/articles/:articleId/:edit" component={EditArticlePage} />
        <Route path="/articles/:articleId" component={ArticlePage} />
        <Route exact path="/articles" component={ArticlesListPage} />
      </Switch>
    </div>
  );
};

export default Articles;
