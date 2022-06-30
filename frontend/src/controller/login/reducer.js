import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { getUserAsync, loginAsync, signupAsync } from "./thunks";

const INITIAL_STATE = {
  user: {},
  token: null,
  login: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  signup: REQUEST_STATE.IDLE,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.user = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(loginAsync.pending, (state) => {
        state.login = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.login = REQUEST_STATE.FULFILLED;
        // console.log(action.payload);
        state.token = action.payload.token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.login = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.signup = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default loginSlice.reducer;
