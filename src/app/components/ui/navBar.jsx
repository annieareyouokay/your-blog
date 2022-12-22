import React from 'react';
import { Link } from 'react-router-dom';
import NavProfile from './navProfile';

const NavBar = () => {
  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src={
              process.env.PUBLIC_URL +
              '/your-blog-low-resolution-logo-color-on-transparent-background.png'
            }
            width="90"
            height="28"
          ></img>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/login/signUp">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                Log in
              </Link>
              <NavProfile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
