import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getArticlesLoadingStatus, loadArticlesList } from '../store/articles';
import { getUsersLoadingStatus, loadUsersList } from '../store/users';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const articlesIsLoading = useSelector(getArticlesLoadingStatus());
  const usersIsLoading = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadUsersList());
    dispatch(loadArticlesList());
  }, []);

  if (articlesIsLoading && usersIsLoading) <h1 className="title is-1">Loading...</h1>;
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;
