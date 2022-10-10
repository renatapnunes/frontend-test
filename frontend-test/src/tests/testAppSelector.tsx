import { TypedUseSelectorHook } from "react-redux";

import { RootState } from "@/redux/store";
import { Movie } from "@/utils/types";

import { movies } from "./mock";

interface State {
  filter: {
    category: string;
    text: string;
  };
  order: string;
  movies: Movie[];
}

const state = {
  filter: {
    category: "films",
    text: "",
  },
  order: "az",
  movies: movies,
};

export const testUseAppSelector = (
  f: (arg0: State) => TypedUseSelectorHook<RootState>
) => f(state);
