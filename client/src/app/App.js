import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import AppLoader from './hoc/appLoader';
import Articles from './layouts/aricles';
// import Main from './layouts/main';
import Logout from './layouts/logout';
// import ManageUserArticles from './page/manageUserArticles/manageUserArticles';
import Loader from './layouts/loader';
import Footer from './components/ui/footer';

const App = () => {
  return (
    <div>
      <AppLoader>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/loader" component={Loader} />
          <Route path="/articles" component={Articles} />
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
