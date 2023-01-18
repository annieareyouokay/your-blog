import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from '../common/form/searchField';
// import NavProfile from './navProfile';

const NavBar = () => {
  return (
    <nav className="navbar is-primary has-shadow is-fixed-top">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src={
              process.env.PUBLIC_URL +
              '/your-blog-high-resolution-logo-white-on-transparent-background.png'
            }
            alt="Logo"
          />
        </Link>
        <span className="navbar-burger" data-target="navbarMenuHeroC">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div className="navbar-menu" id="nav-links">
        <div className="navbar-end">
          <div className="navbar-item">
            <SearchField />
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-light" to="/login">
                Log in
              </Link>
              <Link className="button is-link" to="/login/signUp">
                <strong>Sign up</strong>
              </Link>
            </div>
          </div>
          <div className="navbar-item">
            <Link to="/articles/manage" className="button is-warning">
              your profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
