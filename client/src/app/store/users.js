import { createSlice } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import usersService from '../services/users.service';
import history from '../utils/history';
import { generateAuthError } from '../utils/generateAuthError';

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    };

const usersSlice = createSlice({
  name: 'users',
  initialState,
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
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRecived,
  usersRequestFailed,
  usersRequested,
  authRequestFailed,
  authRequestSuccess,
  authRequested,
  userLoggedOut
} = actions;

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await usersService.get();
    dispatch(usersRecived(content));
  } catch (error) {
    dispatch(usersRequestFailed(error.message));
  }
};

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    history.push('/');
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    dispatch(authRequested);
    try {
      const data = await authService.login(payload);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.userId }));
      history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logout = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push('/');
};

export const getUsers = () => (state) => state.users.entities;
export const getUserIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getUserById = (id) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => u._id === id);
  } else {
    return null;
  }
};
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getCurrentUserData = () => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => {
      return u._id === state.users.auth.userId;
    });
  } else {
    return null;
  }
};
export default usersReducer;
