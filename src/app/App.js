import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import AppLoader from './hoc/appLoader';
import Articles from './layouts/aricles';
import Main from './layouts/main';
import Logout from './layouts/logout';
import ManageUserArticles from './page/manageUserArticles/manageUserArticles';
import Loader from './layouts/loader';

const App = () => {
  return (
    <div className='hero is-primary is-fullheight'>
      <AppLoader>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path='/loader' component={Loader} />
          <Route path="/manage" component={ManageUserArticles} />
          <Route path="/articles" component={Articles} />
          <Route path="/login/:type?" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </AppLoader>
    </div>
  );
};

export default App;
