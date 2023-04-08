import { createSlice } from "@reduxjs/toolkit";
import { getRandomCocktail } from "./getRandomCocktail";

const initialState = {
  recipes: [],
  loading: false,
};

const randomDrinkSlice = createSlice({
  name: "randomDrinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCocktail.pending, (state) => {
        state.loading = true;
        state.recipes = [];
      })
      .addCase(getRandomCocktail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recipes = payload;
      });
  },
});

export default randomDrinkSlice.reducer;
