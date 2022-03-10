import React, { createContext, useState, useContext, useCallback } from "react";
import api from "services/api";
import { paginate, sorting } from "utils/helpers";
import homeMapper from "utils/mappers/home.mapper";
import * as T from "./home.types";

const HomeContext = createContext<T.HomeContext>({} as T.HomeContext);

export const HomeProvider = ({ children }: T.Props) => {
  const [postsInList, setPostsInList] = useState<T.PostsTypes[]>([]);
  const [postsInCards, setPostsInCards] = useState<T.PostsTypes[]>([]);
  const [defaultPosts, setDefaultPosts] = useState<T.PostsTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const handleList = useCallback(async () => {
    setLoading(true);
    const response = await api.get("/posts");

    const results = homeMapper(response.data);
    setDefaultPosts(results);

    const cardsResults = paginate(results, 1, 8);
    const listResults = paginate(results, 1, 10);

    setPostsInList(listResults);
    setPostsInCards(cardsResults);

    setTotalResults(results.length);
    setLoading(false);
  }, []);

  const handleSearch = useCallback(
    (value: string) => {
      const results = defaultPosts.filter((post) =>
        JSON.stringify(post.title).toLowerCase().includes(value.toLowerCase())
      );

      const cardsResults = paginate(results, 1, 8);
      const listResults = paginate(results, 1, 10);

      setPostsInList(listResults);
      setPostsInCards(cardsResults);
      setTotalResults(results.length);
    },
    [defaultPosts]
  );

  const handlePaginate = useCallback(
    (page: number) => {
      const cardsResults = paginate(defaultPosts, page, 8);
      const listResults = paginate(defaultPosts, page, 10);

      setPostsInCards(cardsResults);
      setPostsInList(listResults);
    },
    [postsInCards, postsInList]
  );

  const handleListSort = useCallback(
    (order?: string) => {
      if (!order) {
        setPostsInList(defaultPosts);
        return;
      }

      const results = sorting(defaultPosts, order);

      setPostsInList(results);
    },
    [defaultPosts]
  );

  return (
    <HomeContext.Provider
      value={{
        handleList,
        handleSearch,
        handlePaginate,
        handleListSort,
        postsInList,
        loading,
        totalResults,
        postsInCards,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
