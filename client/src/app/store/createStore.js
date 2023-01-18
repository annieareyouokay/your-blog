import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles';
import usersReducer from './users';

const rootReducer = combineReducers({
  articles: articlesReducer,
  users: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}