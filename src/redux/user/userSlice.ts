import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  addUserAction,
  deleteUserAction,
  logoutUserAction
} from "./userActions";
import { RootState } from "../store";
import { isEmpty } from "../../utils/helpers";
import { users } from "../../data/users";

export interface UserInterface {
  branchId: number,
  userName: string,
  password: string,
  firstName: string,
  middleName: string,
  lastName: string,
  position: string,
}

export interface UserState {
  users: UserInterface[],
  data: UserInterface | null,
  isLoading: boolean,
  error: string
}

const initialState: UserState = {
  users: users,
  data: null,
  isLoading: false,
  error: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: addUserAction,
    logoutUser: logoutUserAction,
    deleteUser: deleteUserAction
  },
  extraReducers: (builder) => {
    builder
      // post credentials action lifecycle
      .addCase(loginUser.pending, (state) => {
        state.data = null
        state.isLoading = true
        state.error = ""
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
        state.error = isEmpty(payload) ? "User not found!" : ""
      })
      .addCase(loginUser.rejected, (state) => {
        state.data = null
        state.isLoading = false
        state.error = "user not found"
      });
  }
});

// reducers
export const { addUser, logoutUser, deleteUser } = userSlice.actions;
// state
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;