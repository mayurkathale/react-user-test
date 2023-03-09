import { combineReducers } from '@reduxjs/toolkit';
import { PaginationReducer } from './pagination.reducer';
import { UserReducer } from './user.reducer';

const reducer = combineReducers({
  users: UserReducer,
  pages: PaginationReducer,
});

export default reducer;
