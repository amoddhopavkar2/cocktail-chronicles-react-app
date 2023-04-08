import { createAsyncThunk } from "@reduxjs/toolkit";
import { findCocktailBySearchTerm } from "../../services/search-service";

export const findFoodBySearchTermThunk = createAsyncThunk(
  "findFoodBySearchTerm",
  (term) => findCocktailBySearchTerm(term)
);
