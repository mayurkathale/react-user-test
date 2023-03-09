import { UserData } from '@/types';
import { ACTION_TYPES } from '../constants';

export const setUsers = (users: UserData[]) => {
  return {
    type: ACTION_TYPES.UPDATE_USERS,
    payload: users,
  };
};
