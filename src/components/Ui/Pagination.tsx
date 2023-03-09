import { setPage, setPageLoading } from '@/store/actions/page.action';
import { setUsers } from '@/store/actions/user.action';
import { ApiResponse, StoreState } from '@/types';
import { sortUsers } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const pageStore = useSelector((state: StoreState) => state.pages);
  const dispatch = useDispatch();

  const handleSetCurrentPage = (pageNumber: number) => {
    if (pageNumber === -1) {
      dispatch(setPage(1));
    } else if (pageNumber === 0) {
      dispatch(setPage(pageStore.page++));
    } else {
      dispatch(setPage(pageNumber));
    }

    if (pageStore.page !== pageNumber) {
      dispatch(setPageLoading(true));
      setTimeout(async () => {
        try {
          const userList = (await (
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pageNumber}`)
          ).json()) as ApiResponse;
          dispatch(setUsers(sortUsers(userList.data, 'last_name')));
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setPageLoading(false));
        }
      }, 500);
    }
  };

  let startPage = 1,
    lastPage = 1;
  if (pageStore.page - 2 > 0) {
    startPage = pageStore.page - 2;
  }
  if (pageStore.page + 2 <= pageStore.totalPages) {
    lastPage = pageStore.page + 2;
  } else {
    lastPage = pageStore.totalPages;
  }

  return (
    <div className={styles.pagination}>
      <div>
        <span onClick={() => handleSetCurrentPage(-1)}>&lt;&lt;</span>
        {[...Array(lastPage - startPage + 1)].map((_, i) => (
          <span
            key={i}
            className={i === pageStore.page - 1 ? styles.current : ''}
            onClick={() => handleSetCurrentPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span onClick={() => handleSetCurrentPage(pageStore.totalPages)}>
          &gt;&gt;
        </span>
      </div>
    </div>
  );
};
export default Pagination;
