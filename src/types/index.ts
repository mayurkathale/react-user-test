export type UserData = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export type ApiResponse = {
  data: UserData[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type UserState = {
  users: UserData[] | [];
};

export type PaginationState = {
  page: number;
  perPage: number;
  totalPages: number;
  pageLoading: boolean;
};

export type StoreState = {
  users: UserState;
  pages: PaginationState;
};