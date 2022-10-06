import { configureStore } from "@reduxjs/toolkit";

import sliceList from "./sliceList";

const store = configureStore({
  reducer: {
    list: sliceList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
