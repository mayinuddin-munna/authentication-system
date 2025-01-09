import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/auth";

export const signUp = createAsyncThunk("auth/register", async (userData) => {
  return await registerUser(userData);
});

export const signIn = createAsyncThunk("auth/login", async (credentials) => {
  return await loginUser(credentials);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    refreshToken: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      sessionStorage.removeItem("token");
      document.cookie = "refreshToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        const { access, refresh } = action.payload;
        state.user = action.payload;
        state.token = access;
        state.refreshToken = refresh;
        sessionStorage.setItem("token", access);
        document.cookie = `refreshToken=${refresh}`;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
