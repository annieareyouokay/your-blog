import { createSlice, createAction } from '@reduxjs/toolkit';
import articlesService from '../services/atricles.service';
import history from '../utils/history';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    dataLoaded: false
  },
  reducers: {
    articlesRequested: (state) => {
      state.isLoading = true;
    },
    articlesReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    articlesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    articlePosted: (state, action) => {
      state.entities = [...state.entities, action.payload];
    },
    articleUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((a) => a._id === action.payload._id)
      ] = action.payload;
    },
    articleUpdateFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

const articlePostRequested = createAction('articles/articlePostRequested');
const postArticleFailed = createAction('articles/postArticleFailed');
const articleUpdateRequested = createAction('articles/articleUpdateRequested');

const { reducer: articlesReducer, actions } = articlesSlice;
const {
  articlesRequested,
  articlesReceived,
  articlesRequestFailed,
  articlePosted,
  articleUpdateSuccessed,
  articleUpdateFailed
} = actions;

export const loadArticlesList = () => async (dispatch) => {
  dispatch(articlesRequested());
  try {
    const { content } = await articlesService.get();
    dispatch(articlesReceived(content));
  } catch (error) {
    dispatch(articlesRequestFailed(error.message));
  }
};

export const postArticle = (payload) => async (dispatch) => {
  dispatch(articlePostRequested());
  try {
    const { content } = await articlesService.post(payload);
    dispatch(articlePosted(content));
    history.push('/admin');
  } catch (error) {
    dispatch(postArticleFailed());
  }
};

export const updateArticle = (articleId, payload) => async (dispatch) => {
  dispatch(articleUpdateRequested());
  try {
    const { content } = await articlesService.update(articleId, payload);
    dispatch(articleUpdateSuccessed(content));
    history.push('/admin');
  } catch (error) {
    dispatch(articleUpdateFailed());
  }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
  state.articles.isLoading;
export const getArticleById = (id) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.find((a) => a._id === id);
  }
};
export const getArticlesByUserId = (userId) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.filter((a) => a.userId === userId);
  }
};
export const getDataStatus = () => (state) => state.users.dataLoaded;

export default articlesReducer;
