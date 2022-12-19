import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles';

const rootReducer = combineReducers({
  articles: articlesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
