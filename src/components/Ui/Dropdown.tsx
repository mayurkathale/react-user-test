import { setUsers } from '@/store/actions/user.action';
import { StoreState, UserData } from '@/types';
import { sortUsers } from '@/utils';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Dropdown.module.scss';

const defaultSelectValue = 'id';
const Dropdown = () => {
  const [selected, setSelected] = useState(defaultSelectValue);
  const dispatch = useDispatch();
  const users = useSelector((state: StoreState) => state.users.users);

  const handleOnChange = (value: keyof UserData) => {
    setSelected(value);
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
        defaultValue={selected}
        style={{ color: selected === defaultSelectValue ? 'gray' : 'black' }}
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
export default Dropdown;
