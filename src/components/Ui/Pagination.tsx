import { setPage, setPageLoading } from '@/store/actions/page.action';
import { setUsers } from '@/store/actions/user.action';
import { ApiResponse, PaginationState } from '@/types';
import { sortUsers } from '@/utils';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';

type Props = {
  pageStore: PaginationState;
};

const Pagination = ({ pageStore }: Props) => {
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
          dispatch(setUsers(sortUsers(userList.data, pageStore.sortBy)));
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setPageLoading(false));
        }
      }, 500);
    }
  };

  const calculatePage = useMemo(
    () => expensiveCalculatePage(pageStore.page, pageStore.totalPages),
    [pageStore.page, pageStore.totalPages]
  );

  return (
    <div className={styles.pagination}>
      <div>
        <span onClick={() => handleSetCurrentPage(-1)}>&lt;&lt;</span>
        {[...Array(calculatePage.lastPage - calculatePage.startPage + 1)].map(
          (_, i) => (
            <span
              key={i}
              className={i === pageStore.page - 1 ? styles.current : ''}
              onClick={() => handleSetCurrentPage(i + 1)}
            >
              {i + 1}
            </span>
          )
        )}
        <span onClick={() => handleSetCurrentPage(pageStore.totalPages)}>
          &gt;&gt;
        </span>
      </div>
    </div>
  );
};

const expensiveCalculatePage = (page: number, totalPages: number) => {
  let startPage = 1,
    lastPage = 1;
  if (page - 2 > 0) {
    startPage = page - 2;
  }
  if (page + 2 <= totalPages) {
    lastPage = page + 2;
  } else {
    lastPage = totalPages;
  }
  return {
    startPage,
    lastPage,
  };
};
export default Pagination;
