import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ArticleCard from '../../components/ui/articleCard';
import Loader from '../../layouts/loader';
import { getArticlesByUserId } from '../../store/articles';

const TAIL_COUNT = 3;
const PRIMARY_BACKGROUND_COLOR = 'has-background-primary-light';
const DANGER_BACKGROUND_COLOR = 'has-background-danger-light';
const LINK_BACKGROUND_COLOR = 'has-background-link-light';

const ManageUserArticles = () => {
  const history = useHistory();
  const id = '1';
  const articles = useSelector(getArticlesByUserId(id));

  let articlesCrop = [];
  if (!articles) {
    return <Loader />;
  } else if (articles && !articles.length) {
    return <h1 className="title">Nobody posted something</h1>;
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

  const handleOnClick = () => {
    history.push('/articles/add');
  };
  // return (
  //   <div className="container is-max-widescreen mt-3">
  //     <div className="tile is-vertical is-ancestor mb-3">
  //       <div className="tile is-parent is-flex is-justify-content-space-between">
  //         <p className="title has-text-black">Manage articles</p>
  //         <Link className="button is-info" to='/articles/add'>
  //           Add article{' '}
  //           <span className="icon is-medium ml-2">
  //             <ion-icon name="add-outline"></ion-icon>
  //           </span>
  //         </Link>
  //       </div>
  //       {articles.map((a) => {
  //         return (
  //           <div className="tile is-parent" key={a.id}>
  //             <article className="tile box is-child notification">
  //               <div className="content">
  //                 <div className="is-flex is-justify-content-end">
  //                   <button className="delete is-medium has-background-danger"></button>
  //                 </div>
  //                 <p className="title has-text-black">{a.title}</p>
  //                 <p className="has-text-black">{a.description}</p>
  //               </div>
  //             </article>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      {articlesCrop.map((arr, index) => {
        return (
          <div className="columns" key={index}>
            {arr.map((a) => {
              return (
                <ArticleCard
                  article={a}
                  key={a.id}
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
  );
};

export default ManageUserArticles;
