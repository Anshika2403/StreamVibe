import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  currentMovie: null,
  trendingMovies: [],
  popularMovies: [],
  mostWatchedMovies: [],
  newReleaseMovies:[],
  favouriteMovies:[],
  searchResults: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMoviesStart: (state) => {
      state.error = null;
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTrendingMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTrendingMoviesSuccess: (state, action) => {
      state.trendingMovies = action.payload;
      state.loading = false;
    },
    fetchTrendingMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchFavouriteMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFavouriteMoviesSuccess: (state, action) => {
      state.favouriteMovies = action.payload;
      state.loading = false;
    },
    fetchFavouriteMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchMostWatchedMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMostWatchedMoviesSuccess: (state, action) => {
      state.mostWatchedMovies = action.payload;
      state.loading = false;
    },
    fetchMostWatchedMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchNewReleaseMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchNewReleaseMoviesSuccess: (state, action) => {
      state.newReleaseMovies = action.payload;
      state.loading = false;
    },
    fetchNewReleaseMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchPopularMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPopularMoviesSuccess: (state, action) => {
      state.popularMovies = action.payload;
      state.loading = false;
    },
    fetchPopularMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchMovieDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.currentMovie = action.payload;
      state.loading = false;
    },
    fetchMovieDetailsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchSearchResultsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSearchResultsSuccess: (state, action) => {
      state.searchResults = action.payload;
      state.loading = false;
    },
    fetchSearchResultsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },

    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchFavouriteMoviesError,
  fetchFavouriteMoviesStart,
  fetchFavouriteMoviesSuccess,
  fetchMostWatchedMoviesError,
  fetchMostWatchedMoviesStart,
  fetchMostWatchedMoviesSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsStart,
  fetchNewReleaseMoviesStart,
  fetchNewReleaseMoviesError,
  fetchNewReleaseMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesStart,
  fetchPopularMoviesSuccess,
  fetchSearchResultsError,
  fetchSearchResultsStart,
  fetchSearchResultsSuccess,
  fetchTrendingMoviesError,
  fetchTrendingMoviesStart,
  fetchTrendingMoviesSuccess,
  clearSearchResults,
  clearCurrentMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
