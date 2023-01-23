import { createSlice } from '@reduxjs/toolkit';
import tagsService from '../services/tags.service';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    tagsRequested: (state) => {
      state.isLoading = true;
    },
    tagsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    tagsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: tagsReducer, actions } = tagsSlice;
const { tagsRequested, tagsReceived, tagsRequestFailed } = actions;

export const loadTagsList = () => async (dispatch) => {
  dispatch(tagsRequested());
  try {
    const { content } = await tagsService.get();
    dispatch(tagsReceived(content));
  } catch (error) {
    dispatch(tagsRequestFailed(error.message));
  }
};

export const getTagLoadingStatus = () => (state) => state.tags.isLoading;
export const getTags = () => (state) => state.tags.entities;
export const getTagById = (id) => (state) => {
  if (state.tags.entities) {
    return state.tags.entities.find((t) => t._id === id);
  }
};

export default tagsReducer;
