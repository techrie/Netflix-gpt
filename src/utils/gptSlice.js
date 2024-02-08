import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGPTResults: (state) => {
      state.movieNames.length = 0;
      state.movieResults.length = 0;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResults, clearGPTResults } =
  gptSlice.actions;
export default gptSlice.reducer;
