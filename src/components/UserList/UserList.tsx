import { PaginationState, UserData } from '@/types';
import dynamic from 'next/dynamic';
import UserItem from './UserItem/UserItem';
import { memo } from 'react';
import styles from './UserList.module.scss';

type Props = {
  users: UserData[] | [];
  pageStore: PaginationState;
};

const Loading = dynamic(() =>
  import('../Ui/Loading').then((mod) => mod.default)
);

const UserList = ({ users, pageStore }: Props) => {
  return (
    <div className={styles.userlist}>
      {pageStore.pageLoading && <Loading />}
      {users && users.map((user, i) => <UserItem key={i} user={user} />)}
    </div>
  );
};

export default memo(UserList);
