import { createSlice } from "@reduxjs/toolkit";
import { drinkDetailsThunks } from "./drink-details-thunks";

const initialState = {
  meal: {},
  comments: [],
  loading: false,
};

const drinkDetailsReducer = createSlice({
  name: "drinkDetailsReducer",
  initialState,
  extraReducers: {
    [drinkDetailsThunks.pending]: (state) => {
      state.loading = true;
      state.drink = {};
      state.comments = {};
    },
    [drinkDetailsThunks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.drink = payload;
    },
  },
});

export default drinkDetailsReducer.reducer;
