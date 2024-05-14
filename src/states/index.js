import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import isPreloadReducer from './isPreload/reducer';
import detailThreadReducer from './detailThread/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import commentsReducer from './comments/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    detailThread: detailThreadReducer,
    threads: threadsReducer,
    loadingBar: loadingBarReducer,
    comments: commentsReducer,
  },
});

export default store;
