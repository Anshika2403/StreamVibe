import {
  fetchPopularMoviesStart,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchMostWatchedMoviesError,
  fetchMostWatchedMoviesStart,
  fetchMostWatchedMoviesSuccess,
  fetchTrendingMoviesError,
  fetchTrendingMoviesStart,
  fetchTrendingMoviesSuccess,
  fetchFavouriteMoviesError,
  fetchFavouriteMoviesStart,
  fetchFavouriteMoviesSuccess,
  fetchNewReleaseMoviesError,
  fetchNewReleaseMoviesStart,
  fetchNewReleaseMoviesSuccess,
} from "./movieSlice";

import axios from "axios";
import config from "../conf/conf";

export const fetchPopularMovies =
  (limit = 36, page = 1) =>
  async (dispatch) => {
    dispatch(fetchPopularMoviesStart());
    try {
      const response = await axios.get("https://api.trakt.tv/movies/popular", {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": config.traktClientId,
          "trakt-api-version": "2",
        },
        params: {
          limit,
          page,
        },
      });
      dispatch(fetchPopularMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchPopularMoviesError(error.message));
    }
  };

export const fetchMostWatchedMovies =
  (limit = 36, page = 1) =>
  async (dispatch) => {
    dispatch(fetchMostWatchedMoviesStart());
    try {
      const response = await axios.get(
        "https://api.trakt.tv/movies/watched/yearly",
        {
          headers: {
            "Content-Type": "application/json",
            "trakt-api-key": config.traktClientId,
            "trakt-api-version": "2",
          },
          params: {
            limit,
            page,
          },
        }
      );
      // console.log(response.data)
      dispatch(fetchMostWatchedMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMostWatchedMoviesError(error.message));
    }
  };

export const fetchFavouriteMovies =
  (limit = 12, page = 1) =>
  async (dispatch) => {
    dispatch(fetchFavouriteMoviesStart());
    try {
      const response = await axios.get(
        "https://api.trakt.tv/movies/favorited/weekly",
        {
          headers: {
            "Content-Type": "application/json",
            "trakt-api-key": config.traktClientId,
            "trakt-api-version": "2",
          },
          params: {
            limit,
            page,
          },
        }
      );
      // console.log(response.data)
      dispatch(fetchFavouriteMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchFavouriteMoviesError(error.message));
    }
  };

export const fetchTrendingMovies =
  (limit = 12, page = 1) =>
  async (dispatch) => {
    dispatch(fetchTrendingMoviesStart());
    try {
      const response = await axios.get("https://api.trakt.tv/movies/trending", {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": config.traktClientId,
          "trakt-api-version": "2",
        },
        params: {
          limit,
          page,
        },
      });
      // console.log(response.data)
      dispatch(fetchTrendingMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchTrendingMoviesError(error.message));
    }
  };


export const fetchNewReleaseMovies =
  (limit = 12, page = 1) =>
  async (dispatch) => {
    dispatch(fetchNewReleaseMoviesStart());
    try {
      const startDate = new Date(); 
      const response = await axios.get(
        `https://api.trakt.tv/calendars/all/movies/${startDate}/7`,
        {
          headers: {
            "Content-Type": "application/json",
            "trakt-api-key": config.traktClientId,
            "trakt-api-version": "2",
          },
          params: {
            limit,
            page,
          },
        }
      );
      dispatch(fetchNewReleaseMoviesSuccess(response.data.slice(0,12)));
    } catch (error) {
      dispatch(fetchNewReleaseMoviesError(error.message));
    }
  };
