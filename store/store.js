import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";

export let store = null;

export default function getStore(incomingPreloadState) {
  store = configureStore({
    reducer: {
      users: usersSlice,
      posts: postsSlice
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}
