import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchRandomCocktail from "./fetchRandomCocktail";

export const getRandomCocktail = createAsyncThunk(
  "getRandomCocktail",
  async () => await fetchRandomCocktail()
);
export default getRandomCocktail;
