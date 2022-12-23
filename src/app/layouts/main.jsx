import React from 'react';
import useMockData from '../hooks/useMockData';

const Main = () => {
  const { error, initialize, progress, status } = useMockData();
  console.log(process.env.REACT_APP_FIREBASE_KEY);
  const handleClick = () => {
    initialize();
  };

  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child">
            <h1 className="title is-1">Main page</h1>
            <p className="title">Firebase data initilize</p>
            <ul>
              <li>Status: {status}</li>
              <li>Progress: {progress}%</li>
              {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
              {' '}
              Инициализировать
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Main;
