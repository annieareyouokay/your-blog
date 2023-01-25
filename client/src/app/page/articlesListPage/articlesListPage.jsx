import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../../components/ui/articleCard';
import Pagination from '../../components/ui/pagination';
import Loader from '../../layouts/loader';
import { getArticles } from '../../store/articles';
import { paginate } from '../../utils/paginate';

const TAIL_COUNT = 3;
const PRIMARY_BACKGROUND_COLOR = 'has-background-primary-light';
const INFO_BACKGROUND_COLOR = 'has-background-link-light';
const PAGE_SIZE = 2 * 3;

const ArticlesListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useSelector(getArticles());
  const count = articles.length;

  let articlesCrop = [];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (!articles) {
    return <Loader />;
  } else if (articles && !articles.length) {
    return (
      <section className="hero is-fullheight is-info">
        <div className="hero-body">
          <p className="title is-size-1">Have no posts here..</p>
        </div>
      </section>
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
    const cardFooterItemElement =
      cardElement.querySelector('.card-footer-item');
    !cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.add(PRIMARY_BACKGROUND_COLOR);
    !cardFooterItemElement.classList.contains(INFO_BACKGROUND_COLOR) &&
      cardFooterItemElement.classList.add(INFO_BACKGROUND_COLOR);
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    const cardElement = element.closest('.card');
    const cardFooterItemElement =
      cardElement.querySelector('.card-footer-item');
    cardElement.classList.contains(PRIMARY_BACKGROUND_COLOR) &&
      cardElement.classList.remove(PRIMARY_BACKGROUND_COLOR);
    cardFooterItemElement.classList.contains(INFO_BACKGROUND_COLOR) &&
      cardFooterItemElement.classList.remove(INFO_BACKGROUND_COLOR);
  };

  // function filterUsers(data) {
  //   const filteredUsers = searchQuery
  //     ? data.filter(
  //         (user) =>
  //           user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  //       )
  //     : selectedProf
  //     ? data.filter(
  //         (user) =>
  //           JSON.stringify(user.profession) === JSON.stringify(selectedProf)
  //       )
  //     : data;
  //   return filteredUsers.filter((u) => u._id !== currentUserId);
  // }

  return (
    <div className="container">
      {paginatedArtciles.map((arr, index) => {
        return (
          <div className="columns" key={index}>
            {arr.map((a) => {
              return (
                <ArticleCard
                  article={a}
                  key={a._id}
                  mouseOver={handleMouseOver}
                  mouseLeave={handleMouseLeave}
                />
              );
            })}
          </div>
        );
      })}
      <div>
        <Pagination itemsCount={count} currentPage={currentPage} onPageChange={handlePageChange} pageSize={PAGE_SIZE} />
      </div>
    </div>
  );
};

export default ArticlesListPage;
