import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CircleLoader from '../components/common/circleLoader';
import { logout } from '../store/users';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <div className="hero is-fullheight">
      <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <h1 className="title is-size-2">Logging out...</h1>

        <CircleLoader
          height="140"
          width="140"
          color="hsl(171, 100%, 41%)"
          ariaLabel="circles-loading"
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Logout;
