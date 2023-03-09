import { UserData } from '@/types';

export const sortUsers = (data: UserData[], field: string): UserData[] => {
  const sortedUsers = data.sort((a: any, b: any) =>
    a[field] < b[field] ? -1 : 0
  );
  return sortedUsers;
};
