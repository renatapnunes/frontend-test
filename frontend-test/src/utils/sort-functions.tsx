import { Movie } from "@/utils/types";

type objOptions = {
  [key: string]: any;
};

const sortAlphabetically = (a: Movie, b: Movie) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

export const sortFunctions: objOptions = {
  az: (list: Movie[]) => list.sort((a, b) => sortAlphabetically(a, b)),
  za: (list: Movie[]) => list.sort((a, b) => sortAlphabetically(b, a)),
  rating: (list: Movie[]) => list.sort((a, b) => b.rt_score - a.rt_score),
  recent: (list: Movie[]) =>
    list.sort((a, b) => b.release_date - a.release_date),
  runtime: (list: Movie[]) =>
    list.sort((a, b) => b.running_time - a.running_time),
};
