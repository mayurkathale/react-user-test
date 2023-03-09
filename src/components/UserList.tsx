import { StoreState } from '@/types';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import UserItem from './UserItem';
import styles from './UserList.module.scss';

const Loading = dynamic(() =>
  import('./Ui/Loading').then((mod) => mod.default)
);

const UserList = () => {
  const users = useSelector((state: StoreState) => state.users.users);
  const isLoading = useSelector((state: StoreState) => state.pages.pageLoading);
  return (
    <div className={styles.userlist}>
      {isLoading && <Loading />}
      {users.map((user, i) => (
        <UserItem key={i} user={user} />
      ))}
    </div>
  );
};

export default UserList;
