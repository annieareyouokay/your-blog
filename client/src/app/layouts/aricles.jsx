import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddArticlePage from '../page/addArticlePage';
import ArticlePage from '../page/articlePage/articlePage';
import ArticlesListPage from '../page/articlesListPage';
import EditArticlePage from '../page/editArticlePage/editArticlePage';
import ManageUserArticles from '../page/manageUserArticles/manageUserArticles';

const Articles = () => {
  return (
    <section className="section">
      <Switch>
        <Route exact path="/articles/add" component={AddArticlePage} />
        <Route exact path="/articles/manage" component={ManageUserArticles} />
        <Route path="/articles/:articleId/:edit" component={EditArticlePage} />
        <Route path="/articles/:articleId" component={ArticlePage} />
        <Route exact path="/articles" component={ArticlesListPage} />
        <Route exact path="/" component={ArticlesListPage} />
      </Switch>
    </section>
  );
};

export default Articles;
