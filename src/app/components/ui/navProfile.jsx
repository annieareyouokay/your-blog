import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavProfile = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`dropdown is-right ${isOpen ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button
          className="button is-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu6"
          onClick={toggleMenu}
        >
          <span>Maksim Yurovnik</span>
          <span className="icon is-small">
            <ion-icon
              name={isOpen ? 'caret-up-outline' : 'caret-down-outline'}
            ></ion-icon>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          <Link className="dropdown-item" to={'/manage'}>
            Manage articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
