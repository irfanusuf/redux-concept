import { configureStore } from "@reduxjs/toolkit";
import {
  simpleReducer,
  loginUserReducer,
  getUserReducer,
  getUserDataReducer,
} from "./reducers";

const store = configureStore({
  reducer: {
    simple: simpleReducer,
    loginUser: loginUserReducer,
    getUser: getUserReducer,
    getUserData: getUserDataReducer,
  },
});

export default store;
