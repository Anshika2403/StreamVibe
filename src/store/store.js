import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    movie: movieSlice,
  },
});

export default store;
