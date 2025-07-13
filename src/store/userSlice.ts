import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadUsers } from "../utils/loadUsers";

// Type for a user object
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  latitude: number;
  longitude: number;
};

// State type for the user slice
type UserState = {
  users: User[];
};

// Initial state using localStorage
const initialState: UserState = {
  users: loadUsers(),
};

// Redux Toolkit slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
