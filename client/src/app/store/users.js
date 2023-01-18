import { createAction, createSlice } from '@reduxjs/toolkit';
import usersService from '../services/users.service';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: null,
    auth: { userId: '1' },
    isLoading: true,
    error: null
  },
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersRecived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userCreated: (state, action) => {
      state.entities = [...state.entities, action.payload];
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const { usersRecived, usersRequestFailed, usersRequested, userCreated } = actions;

const userCreateRequested = createAction('users/userCreateRequested');
const createUserFailed = createAction('users/createUserFailed');

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const data = await usersService.get();
    dispatch(usersRecived(data));
  } catch (error) {
    dispatch(usersRequestFailed(error.message));
  }
};

export const signUp = (payload) => async (dispatch) => {
  dispatch(userCreateRequested());
  try {
    dispatch(userCreated());
  } catch (error) {
    dispatch(createUserFailed());
  }
};

export const getUsers = () => (state) => state.users.entities;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getUserById = (id) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => u.id === id);
  }
};
export const getCurrentUserId = () => (state) => state.users.auth.userId;

export default usersReducer;
