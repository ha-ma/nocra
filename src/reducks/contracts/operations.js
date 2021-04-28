import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContractsAction = createAsyncThunk("contracts/getContracts", async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(response => response.json())
  // .then(json => console.log(json));
  return posts.data;
});
