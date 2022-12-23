import React from 'react';
import { Link } from 'react-router-dom';
import NavProfile from './navProfile';

const NavBar = () => {
  return (
    <div className="hero-head is-success">
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to='/'>
            <img src={process.env.PUBLIC_URL + '/your-blog-high-resolution-logo-white-on-transparent-background.png'} alt="Logo"/>
          </Link>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to='/login'>
              Login
            </Link>
            <Link className="navbar-item" to='/login/signUp'>
              Register
            </Link>
            <span className="navbar-item">
              <NavProfile />
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
};

export default NavBar;
