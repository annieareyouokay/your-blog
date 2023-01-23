import { useEffect, React } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesList, getDataStatus } from '../store/articles';
import Loader from '../layouts/loader';

const ArticlesLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dataStatus) dispatch(loadArticlesList());
  }, []);
  if (!dataStatus) {
    return (
      <div className="hero is-fullheight">
        <Loader color="hsl(171, 100%, 41%)" />
      </div>
    );
  }
  return children;
};

ArticlesLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default ArticlesLoader;
