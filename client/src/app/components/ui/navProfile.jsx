import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../store/users';
import Loader from '../../layouts/loader';

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  const items = [
    {
      name: 'Manage articles',
      linkTo: '/admin'
    },
    {
      name: 'Logout',
      linkTo: '/logout'
    }
  ];

  const [isOpen, setIsOpen] = useState();
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!currentUser) return <Loader height='45px' width='45' />;

  return (
    <div className={`dropdown is-right ${isOpen ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu6"
          onClick={toggleMenu}
        >
          <span>{ currentUser.name }</span>
          <span className="icon is-small">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          {
            items.map(i => {
              return <Link className="dropdown-item" to={ i.linkTo} key={i.name}>{i.name}</Link>;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
