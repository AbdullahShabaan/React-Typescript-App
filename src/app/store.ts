import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search-pets/SearchSlice";
import { petApi } from "../services/Pets";
export const store = configureStore({
  reducer: {
    searchSlice,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
