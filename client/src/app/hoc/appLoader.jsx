import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getArticlesLoadingStatus, loadArticlesList } from '../store/articles';
import Loader from '../layouts/loader';
import { getTagLoadingStatus, loadTagsList } from '../store/tags';
import { getUserIsLoggedIn, getUsersLoadingStatus, loadUsersList } from '../store/users';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const articlesIsLoading = useSelector(getArticlesLoadingStatus());
  const tagsIsLoading = useSelector(getTagLoadingStatus());
  const usersIsLoading = useSelector(getUsersLoadingStatus());
  const isLoggedIn = useSelector(getUserIsLoggedIn());

  useEffect(() => {
    dispatch(loadArticlesList());
    dispatch(loadTagsList());
    dispatch(loadUsersList());
  }, [isLoggedIn]);

  if (articlesIsLoading || tagsIsLoading || usersIsLoading) {
    return (
      <div className="hero is-fullheight">
        <Loader color="hsl(171, 100%, 41%)" />
      </div>
    );
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;
