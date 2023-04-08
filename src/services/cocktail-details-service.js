import axios from "axios";

const SEARCH_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const cocktailDetailsService = async (mid) => {
  const cocktailDBResponse = await axios.get(`${SEARCH_URL}${mid}`);
  return cocktailDBResponse.data.cocktails[0];
};

export const getCocktailReviewsService = async (mid) => {
  const response = await axios.get(`$`);
};

export const postCocktailCommentService = async (comment) => {};
