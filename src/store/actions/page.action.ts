import { UserData } from '@/types';
import { ACTION_TYPES } from '../constants';

export const setPage = (page: number) => {
  return {
    type: ACTION_TYPES.SET_PAGE,
    payload: page,
  };
};

export const setTotalPage = (page: number) => {
  return {
    type: ACTION_TYPES.SET_TOTAL_PAGE,
    payload: page,
  };
};

export const setPageLoading = (loading: boolean) => {
  return {
    type: ACTION_TYPES.SET_PAGE_LOADING,
    payload: loading,
  };
};

export const setSortBy = (sortBy: keyof UserData) => {
  return {
    type: ACTION_TYPES.SET_SORT_BY,
    payload: sortBy,
  };
};
