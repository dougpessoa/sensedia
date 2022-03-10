import { PostsTypes } from "contexts/home.types";

/** receives new Date() -> returns 31/12/2022 23:59:59 */
export const dateFullFormarter = (date: Date): string => {
  return date.toLocaleString("pt-BR");
};

export const mockUserNames = (userId: number) => {
  const userNames = [
    "Mike Val",
    "John Due",
    "Miranda Bro",
    "Jack Ha",
    "Martin Kay",
    "Michele Due",
    "Catarina Rios",
    "Lucy Sky",
    "Flora Rida",
    "Scooby Doo",
  ];

  return userNames[userId - 1];
};

export const paginate = (
  results: PostsTypes[],
  page: number,
  size: number
): PostsTypes[] => {
  return results.slice((page - 1) * size, page * size);
};

export const sorting = (results: PostsTypes[], order: string): PostsTypes[] => {
  const sorter = results.sort((last, next) => {
    const lastTitle = last.title.toLowerCase();
    const nextTitle = next.title.toLowerCase();

    if (lastTitle > nextTitle) {
      return -1;
    }
    if (lastTitle < nextTitle) {
      return 1;
    }

    return 0;
  });

  if (order === "descend") {
    return sorter;
  }

  return sorter.reverse();
};
