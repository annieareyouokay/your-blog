import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles';
import tagsReducer from './tags';
import usersReducer from './users';

const rootReducer = combineReducers({
  articles: articlesReducer,
  users: usersReducer,
  tags: tagsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
