import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "../api/api";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
