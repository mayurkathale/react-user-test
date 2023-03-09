import Meta from '@/components/Meta';
import Dropdown from '@/components/Ui/Dropdown';
import UserList from '@/components/UserList/UserList';
import Pagination from '@/components/Ui/Pagination';
import { ApiResponse, StoreState } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUsers } from '@/store/actions/user.action';
import { setPage, setTotalPage } from '@/store/actions/page.action';
import { sortUsers } from '@/utils';

type Prop = {
  response: ApiResponse;
};

export default function Home({ response }: Prop) {
  const dispatch = useDispatch();
  const { data, page, total_pages } = response;
  const pageStore = useSelector((state: StoreState) => state.pages);
  const users = useSelector((state: StoreState) => state.users.users);
  useEffect(() => {
    dispatch(setUsers(sortUsers(data, 'id')));
    dispatch(setPage(page));
    dispatch(setTotalPage(total_pages));
  }, [data, page, total_pages, dispatch]);

  return (
    <>
      <Meta />
      <Dropdown sortBy={pageStore.sortBy} />
      <UserList users={users} pageStore={pageStore} />
      <Pagination pageStore={pageStore} />
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: { response: ApiResponse };
}> {
  const response = (await (
    await fetch(process.env.NEXT_PUBLIC_API_URL + '=1')
  ).json()) as ApiResponse;
  return {
    props: { response },
  };
}
