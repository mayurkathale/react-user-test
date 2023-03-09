import Meta from '@/components/Meta';
import Dropdown from '@/components/Ui/Dropdown';
import UserList from '@/components/UserList';
import Pagination from '@/components/Ui/Pagination';
import { ApiResponse } from '@/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUsers } from '@/store/actions/user.action';
import { setPage, setTotalPage } from '@/store/actions/page.action';

type Prop = {
  response: ApiResponse;
};

export default function Home({ response }: Prop) {
  const dispatch = useDispatch();
  const { data, page, total_pages } = response;
  useEffect(() => {
    dispatch(setUsers(data));
    dispatch(setPage(page));
    dispatch(setTotalPage(total_pages));
  });

  return (
    <>
      <Meta />
      <Dropdown />
      <UserList />
      <Pagination />
    </>
  );
}

export async function getStaticProps(context: any): Promise<any> {
  const response = (await (
    await fetch(process.env.NEXT_PUBLIC_API_URL + '=1')
  ).json()) as ApiResponse;
  return {
    props: { response },
  };
}
