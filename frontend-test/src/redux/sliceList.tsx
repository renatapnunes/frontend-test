import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie } from "@/utils/types";

interface Filter {
  category: string;
  text: string;
}

const INITIAL_STATE = {
  filter: {
    category: "films",
    text: "",
  },
  order: "az",
  movies: [] as Movie[],
};

const sliceList = createSlice({
  name: "list",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, { payload }: PayloadAction<Filter>) {
      return { ...state, filter: payload };
    },
    setOrder(state, { payload }: PayloadAction<string>) {
      return { ...state, order: payload };
    },
    setMovies(state, { payload }: PayloadAction<Movie[]>) {
      return { ...state, movies: payload };
    },
  },
});

export const { setFilter, setOrder, setMovies } = sliceList.actions;

export default sliceList.reducer;
