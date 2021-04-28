import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  account: {
    id: "",
    code: "",
    company: "",
    department: "",
    representative: "",
    zip: "",
    address1: "",
    address2: "",
    phone: "",
    fax: "",
    email: "",
    logo_url: "",
    seal_url: ""
  },
  user: {
    id: "",
    account_id: "",
    email: ""
  }
};

export const slice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: {
    "session/login/pending": (state, action) => {
      return state;
    },
    "session/login/fulfilled": (state, action) => {
      localStorage.setItem("access_token", action.payload.access_token);
      return state;
    },
    "session/login/rejected": (state, action) => {
      return state;
    }
  }
});

export default slice.reducer;
