import { ACTION_TYPES } from '../constants';
import { PaginationReducerArg, PaginationState } from '@/types';

const initialState: PaginationState = {
  page: 1,
  perPage: 6,
  totalPages: 2,
  pageLoading: false,
  sortBy: 'id',
};

export const PaginationReducer = (
  state = initialState,
  { type, payload }: PaginationReducerArg
) => {
  switch (type) {
    case ACTION_TYPES.SET_PAGE:
      return { ...state, page: payload };

    case ACTION_TYPES.SET_TOTAL_PAGE:
      return { ...state, totalPages: payload };

    case ACTION_TYPES.SET_PAGE_LOADING:
      return { ...state, pageLoading: payload };

    case ACTION_TYPES.SET_SORT_BY:
      return { ...state, sortBy: payload };

    default:
      return state;
  }
};
