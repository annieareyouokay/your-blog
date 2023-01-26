import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleCard from '../../components/ui/articleCard';
import Pagination from '../../components/ui/pagination';
import Loader from '../../layouts/loader';
import { deleteArticle, getArticlesByUserId } from '../../store/articles';
import { getCurrentUserId } from '../../store/users';
import { paginate } from '../../utils/paginate';

const TAIL_COUNT = 3;
const PRIMARY_BACKGROUND_COLOR = 'has-background-primary-light';
const DANGER_BACKGROUND_COLOR = 'has-background-danger-light';
const LINK_BACKGROUND_COLOR = 'has-background-link-light';
const PAGE_SIZE = 2 * 3;

const ManageUserArticles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const currentUserId = useSelector(getCurrentUserId());
  const articles = useSelector(getArticlesByUserId(currentUserId));
  const count = articles.length;

  const handleOnClick = () => {
    history.push('/admin/add');
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
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
  }

  articlesCrop = getCrop(articles);
  const paginatedArtciles = paginate(articlesCrop, currentPage, 2);

  function getCrop(articles) {
    const newArticles = [];
    for (let index = 0; index < articles.length; index += TAIL_COUNT) {
      newArticles.push(articles.slice(index, index + TAIL_COUNT));
    }
    return newArticles;
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

  const handleOnDelete = (_id) => {
    dispatch(deleteArticle(_id));
  };

  return (
    <section className="section mt-6">
      <div className="container">
        {paginatedArtciles.map((arr, index) => {
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
                    onDelete={handleOnDelete}
                  />
                );
              })}
            </div>
          );
        })}
        <button className="fixed-btn" onClick={handleOnClick}>
          <ion-icon name="add" size="large"></ion-icon>
        </button>
        <div>
        <Pagination itemsCount={count} currentPage={currentPage} onPageChange={handlePageChange} pageSize={PAGE_SIZE} />
      </div>
      </div>
    </section>
  );
};

export default ManageUserArticles;
