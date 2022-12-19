import React from 'react';
// import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import AppLoader from './hoc/appLoader';
import Articles from './layouts/aricles';

const App = () => {
  return (
    <div className="container">
      <AppLoader>
        <NavBar />
        {/* <Login /> */}
        <Articles />
      </AppLoader>
    </div>
  );
};

export default App;
