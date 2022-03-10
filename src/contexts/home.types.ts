export type Props = {
  children?: React.ReactNode;
};

export type PostsTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
  created_at: string;
};

export type HomeContext = {
  handleList?: () => void;
  handleSearch?: (value: string) => void;
  handlePaginate?: (page: number) => void;
  handleListSort?: (order?: string) => void;
  postsInList: PostsTypes[];
  loading: boolean;
  totalResults: number;
  postsInCards: PostsTypes[];
};
