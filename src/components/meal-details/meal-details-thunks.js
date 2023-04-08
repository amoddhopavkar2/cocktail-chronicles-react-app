import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCocktailReviewsService,
  cocktailDetailsService,
  postCocktailCommentService,
} from "../../services/cocktail-details-service";

const BASE_API_URL = process.env.REACT_API_BASE || "http://localhost:4000";
const USER_API_URL = BASE_API_URL + "/meal";

export const mealDetailsThunks = createAsyncThunk(
  "mealDetailsThunks/get",
  async (mid) => await cocktailDetailsService(mid)
);

export const getMealReviewsThunk = createAsyncThunk(
  "meal/getComments",
  async (mid) => await getCocktailReviewsService(mid)
);

export const postMealCommentThunk = createAsyncThunk(
  "meal/postComment",
  async (comment) => await postCocktailCommentService(comment)
);
