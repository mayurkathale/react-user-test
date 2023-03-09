import { UserData } from '@/types';

export const sortUsers = (
  data: UserData[],
  field: keyof UserData
): UserData[] => {
  const sortedUsers = data.sort((a: UserData, b: UserData) =>
    a[field] < b[field] ? -1 : 0
  );
  return sortedUsers;
};
