import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import authReducer from "../featuers/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})
setupListeners(store.dispatch)
