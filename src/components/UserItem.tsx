import { UserData } from '@/types';
import Image from 'next/image';
import styles from './UserItem.module.scss';

type Props = {
  user: UserData;
};

const UserItem = ({ user }: Props) => {
  return (
    <div className={styles.useritem}>
      <div className={styles.imgBox}>
        <Image
          //loader={() => user.avatar}
          src={user.avatar}
          alt="asda"
          width={180}
          height={180}
        />
      </div>
      <div>#{user.id}</div>
      <div className={styles.userInfo}>
        <div>
          <div>First Name</div>
          <div>:</div>
          <div>{user.first_name}</div>
        </div>
        <div>
          <div>Last Name</div>
          <div>:</div>
          <div>{user.last_name}</div>
        </div>
        <div>
          <div>Email</div>
          <div>:</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
};
export default UserItem;
