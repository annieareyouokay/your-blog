import { createSlice, createAction, nanoid } from '@reduxjs/toolkit';
import articlesService from '../services/atricles.service';
import { getCurrentUserId } from './users';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    articlesRequested: (state) => {
      state.isLoading = true;
    },
    articlesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    articlesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    articlePosted: (state, action) => {
      state.entities = [...state.entities, action.payload];
    }
  }
});

const articlePostRequested = createAction('articles/articlePostRequested');
const postArticleFailed = createAction('articles/postArticleFailed');

const { reducer: articlesReducer, actions } = articlesSlice;
const {
  articlesRequested,
  articlesReceived,
  articlesRequestFailed,
  articlePosted
} = actions;

export const loadArticlesList = () => async (dispatch) => {
  dispatch(articlesRequested());
  try {
    const data = await articlesService.get();
    dispatch(articlesReceived(data));
  } catch (error) {
    dispatch(articlesRequestFailed(error.message));
  }
};

export const postArticle = (payload) => async (dispatch, getState) => {
  dispatch(articlePostRequested());
  console.log(getCurrentUserId()(getState()));
  try {
    const data = await articlesService.post({
      ...payload,
      id: nanoid(),
      userId: '1',
      date: Date.now().toString(),
      img: 'https://loremflickr.com/320/240?random=2'
    });
    dispatch(articlePosted(data));
  } catch (error) {
    dispatch(postArticleFailed());
  }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
  state.articles.isLoading;
export const getArticleById = (id) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.find((a) => a.id === id);
  }
};
export const getArticlesByUserId = (userId) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.filter((a) => a.userId === userId);
  }
};

export default articlesReducer;
