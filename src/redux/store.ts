import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices";
import { appApi } from "../api/api";

export const store = configureStore({
  reducer: {
    app: appReducer,
    // Add the generated reducer as a specific top-level slice
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
