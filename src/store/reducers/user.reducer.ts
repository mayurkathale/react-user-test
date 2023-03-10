import { UserReducerArg, UserState } from '@/types';
import { ACTION_TYPES } from '../constants';

const initialState: UserState = {
  users: [],
};

export const UserReducer = (
  state = initialState,
  { type, payload }: UserReducerArg
) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
