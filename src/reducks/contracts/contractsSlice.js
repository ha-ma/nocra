import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "contract title 1"
  },
  {
    title: "contract title 2"
  }
];

export const slice = createSlice({
  name: "contracts",
  initialState,
  reducers: {},
  extraReducers: {
    "contracts/getContracts/pending": (state, action) => {
      return state;
    },
    "contracts/getContracts/fulfilled": (state, action) => {
      state = action.payload;
      return state;
    },
    "contracts/getContracts/rejected": (state, action) => {
      console.log("failed action.error", action.error);
      return state;
    }
  }
});

export default slice.reducer;
