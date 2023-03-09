import { UserData } from '@/types';
import Image from 'next/image';
import UserItemDetail from './UserItemDetail/UserItemDetail';
import styles from './UserItem.module.scss';

type Props = {
  user: UserData;
};

const UserItem = ({ user }: Props) => {
  return (
    <div className={styles.useritem}>
      <div className={styles.imgBox}>
        <Image
          src={user.avatar}
          alt="asda"
          width={180}
          height={180}
          placeholder="blur"
          blurDataURL="https://reqres.in/img/faces/1-image.jpg"
        />
      </div>
      <div>#{user.id}</div>
      <div className={styles.userInfo}>
        <UserItemDetail label="First Name" detail={user.first_name} />
        <UserItemDetail label="Last Name" detail={user.last_name} />
        <UserItemDetail label="Email" detail={user.email} />
      </div>
    </div>
  );
};
export default UserItem;
