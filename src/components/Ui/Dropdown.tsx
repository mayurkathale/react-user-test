import { setSortBy } from '@/store/actions/page.action';
import { setUsers } from '@/store/actions/user.action';
import { StoreState, UserData } from '@/types';
import { sortUsers } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import styles from './Dropdown.module.scss';

type Props = {
  sortBy: keyof UserData;
};

const defaultSelectValue = 'id';
const Dropdown = ({ sortBy }: Props) => {
  const dispatch = useDispatch();
  const users = useSelector((state: StoreState) => state.users.users);

  const handleOnChange = (value: keyof UserData) => {
    dispatch(setSortBy(value));
    dispatch(
      setUsers(
        sortUsers(
          users.map((a) => a),
          value
        )
      )
    );
  };

  const options = [
    {
      value: 'first_name',
      label: 'First Name',
    },
    {
      value: 'last_name',
      label: 'Last Name',
    },
    {
      value: 'id',
      label: 'Id',
    },
  ];
  return (
    <div className={styles.sortDropdown}>
      <label htmlFor="fruits">Sort</label>
      <select
        id="fruits"
        name="fruits"
        defaultValue={sortBy}
        style={{ color: sortBy === defaultSelectValue ? 'gray' : 'black' }}
        onChange={(e) => handleOnChange(e.target.value as keyof UserData)}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default memo(Dropdown);
