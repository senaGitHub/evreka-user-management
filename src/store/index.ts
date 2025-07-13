import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import "leaflet/dist/leaflet.css";

export const store = configureStore({
  reducer: {
    user: userReducer, // "user" state will be managed by userSlice
  },
});

//Export RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
