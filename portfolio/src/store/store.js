import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import authReducer from "../featuers/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectApi } from "../services/ProjectApi";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    auth: authReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, projectApi.middleware),
})
setupListeners(store.dispatch)
