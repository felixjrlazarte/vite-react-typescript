import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../components/Login/login";
import { users } from "../../data/users";
import { UserState, UserInterface } from "./userSlice";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (user: FormValues) => {
    try {
      const userDetails = users.find((item) =>
        item.branchId === Number(user.branchID) &&
        item.userName === user.username &&
        item.password === user.password
      );

      if (userDetails) {
        return userDetails;
      } else {
        return {}
      }
    } catch (error: any) {
      return error;
    }
  }
);

export const logoutUserAction = (state: UserState) => {
  state.data = null;
  state.users = users;
}

export const addUserAction = (state: UserState, action: PayloadAction<UserInterface>) => {
  const userIndex = state.users.findIndex((object) => {
    return object.userName === action.payload.userName;
  });

  if (userIndex === -1) {
    state.users.push(action.payload);
  }
}

export const deleteUserAction = (state: UserState, action: PayloadAction<string>) => {
  const userIndex = state.users.findIndex((object) => {
    return object.userName === action.payload;
  });

  if (userIndex !== -1) {
    state.users.splice(userIndex, 1);
  }
}