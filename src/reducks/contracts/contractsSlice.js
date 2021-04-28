import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contracts: [
    {
      title: "contract title 1"
    },
    {
      title: "contract title 2"
    }
  ],
  contractDetail: {
    userId: 0,
    id: 0,
    title: "",
    completed: false
  }
};

export const slice = createSlice({
  name: "contracts",
  initialState,
  reducers: {},
  extraReducers: {
    "contracts/getContracts/pending": (state, action) => {
      return state;
    },
    "contracts/getContracts/fulfilled": (state, action) => {
      state = {
        ...state,
        contracts: action.payload
      };
      return state;
    },
    "contracts/getContracts/rejected": (state, action) => {
      console.log("failed action.error", action.error);
      return state;
    },
    "contracts/getContractDetail/pending": (state, action) => {
      return state;
    },
    "contracts/getContractDetail/fulfilled": (state, action) => {
      state = {
        ...state,
        contractDetail: action.payload
      };
      // state.contractDetail = action.payload;
      console.log("action.payload", action.payload);
      return state;
    },
    "contracts/getContractDetail/rejected": (state, action) => {
      console.log("failed action.error", action.error);
      return state;
    }
  }
});

export default slice.reducer;
