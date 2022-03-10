import { PostsTypes } from "contexts/home.types";
import { dateFullFormarter, mockUserNames } from "utils/helpers";

const homeMapper = (results: PostsTypes[]): PostsTypes[] => {
  return results.map((result) => ({
    ...result,
    author: mockUserNames(result.userId),
    created_at: dateFullFormarter(new Date()),
  }));
};

export default homeMapper;
