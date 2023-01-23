import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ArticleCard from '../../components/ui/articleCard';
import Loader from '../../layouts/loader';
import { getArticlesByUserId } from '../../store/articles';
import { getCurrentUserId } from '../../store/users';

const TAIL_COUNT = 3;
const PRIMARY_BACKGROUND_COLOR = 'has-background-primary-light';
const DANGER_BACKGROUND_COLOR = 'has-background-danger-light';
const LINK_BACKGROUND_COLOR = 'has-background-link-light';

const ManageUserArticles = () => {
  const history = useHistory();
  const currentUserId = useSelector(getCurrentUserId());
  const articles = useSelector(getArticlesByUserId(currentUserId));

  const handleOnClick = () => {
    history.push('/admin/add');
  };

  let articlesCrop = [];
  if (!articles) {
    return <Loader />;
  } else if (articles && !articles.length) {
    return (
      <>
        <section className="hero is-fullheight is-warning">
          <div className="hero-body">
            <p className="title is-size-1">You have no posts</p>
          </div>
        </section>
        <button className="fixed-btn" onClick={handleOnClick}>
          <ion-icon name="add" size="large"></ion-icon>
        </button>
      </>
    );
  } else {
    articlesCrop = getCrop(articles);
    function getCrop(articles) {
      const newArticles = [];
      for (let index = 0; index < articles.length; index += TAIL_COUNT) {
        newArticles.push(articles.slice(index, index + TAIL_COUNT));
      }
      return newArticles;
    }
  }

  const handleMouseOver = (e) => {
    const element = e.target;
    const cardElement = element.closest('.card');
    !cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.add(PRIMARY_BACKGROUND_COLOR);
    const deleteButtonElement = cardElement.querySelector('#deleteButton');
    !deleteButtonElement.classList.contains(DANGER_BACKGROUND_COLOR) &&
      deleteButtonElement.classList.add(DANGER_BACKGROUND_COLOR);
    const editButtonElement = cardElement.querySelector('#editButton');
    !editButtonElement.classList.contains(LINK_BACKGROUND_COLOR) &&
      editButtonElement.classList.add(LINK_BACKGROUND_COLOR);
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    const cardElement = element.closest('.card');
    cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.remove(PRIMARY_BACKGROUND_COLOR);
    const deleteButtonElement = cardElement.querySelector('#deleteButton');
    deleteButtonElement.classList.contains(DANGER_BACKGROUND_COLOR) &&
      deleteButtonElement.classList.remove(DANGER_BACKGROUND_COLOR);
    const editButtonElement = cardElement.querySelector('#editButton');
    editButtonElement.classList.contains(LINK_BACKGROUND_COLOR) &&
      editButtonElement.classList.remove(LINK_BACKGROUND_COLOR);
  };

  return (
    <section className="section mt-6">
      <div className="container">
        {articlesCrop.map((arr, index) => {
          return (
            <div className="columns" key={index}>
              {arr.map((a) => {
                return (
                  <ArticleCard
                    article={a}
                    key={a._id}
                    mouseLeave={handleMouseLeave}
                    mouseOver={handleMouseOver}
                    isManage={true}
                  />
                );
              })}
            </div>
          );
        })}
        <button className="fixed-btn" onClick={handleOnClick}>
          <ion-icon name="add" size="large"></ion-icon>
        </button>
      </div>
    </section>
  );
};

export default ManageUserArticles;
