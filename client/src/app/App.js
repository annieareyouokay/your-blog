import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import AppLoader from './hoc/appLoader';
import Articles from './layouts/aricles';
import Logout from './layouts/logout';
import Footer from './components/ui/footer';
import AddArticlePage from './page/addArticlePage';
import Main from './layouts/main';
import ManageUserArticles from './page/manageUserArticles/manageUserArticles';

const App = () => {
  return (
    <div>
      <AppLoader>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/articles/:articleId?/:edit?" component={Articles}/>
          <Route path="/admin/add" component={AddArticlePage}/>
          <Route path="/admin" component={ManageUserArticles} />
          <Route path="/login/:type?" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </AppLoader>
    </div>
  );
};

export default App;
