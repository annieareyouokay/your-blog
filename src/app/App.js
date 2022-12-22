import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import AppLoader from './hoc/appLoader';
import Articles from './layouts/aricles';
import Main from './layouts/main';
import Logout from './layouts/logout';

const App = () => {
  return (
    <div className="container is-fluid">
      <AppLoader>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
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
