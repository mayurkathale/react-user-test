import { ACTION_TYPES } from '../constants';
import { PaginationState } from '@/types';

const initialState: PaginationState = {
  page: 1,
  perPage: 6,
  totalPages: 2,
  pageLoading: false,
};

export const PaginationReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case ACTION_TYPES.SET_PAGE:
      return { ...state, page: payload };

    case ACTION_TYPES.SET_TOTAL_PAGE:
      return { ...state, totalPages: payload };

    case ACTION_TYPES.SET_PAGE_LOADING:
      return { ...state, pageLoading: payload };

    default:
      return state;
  }
};
