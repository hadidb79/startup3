"use client"
import { createSlice } from "@reduxjs/toolkit";

export type State = {
  name?: string;
  email?: string;
  password?: string;
  isVerified : boolean;
};

const initialState: State = {
  name: "",
  email: "",
  password: "",
  isVerified : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const data: State = action.payload;
      return data;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

