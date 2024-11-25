import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../conf/conf";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";

function GenreBox({ genre = "adventure", top }) {
  const navigate = useNavigate();

  const mostWatchedMovies = useSelector(
    (state) => state.movie.mostWatchedMovies
  );
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const [movieByGenre, setMovieByGenre] = useState([]);
  // console.log(mostWatchedMovies);
  const movies = top ? popularMovies : mostWatchedMovies;
  // console.log(popularMovies)

  useEffect(() => {
    const fetchByGenre = async () => {
      // console.log("Fetching movies by genre...");

      const movieRequests = movies.map((movie) => {
        const movieId =
          movies == popularMovies ? movie.ids?.slug : movie.movie.ids.slug;
        // console.log("movie",movieId);
        return axios.get(
          `https://api.trakt.tv/movies/${movieId}?extended=full`,
          {
            headers: {
              "Content-Type": "application/json",
              "trakt-api-key": config.traktClientId,
              "trakt-api-version": "2",
            },
          }
        );
      });

      try {
        const movieDetailsArray = await Promise.all(movieRequests);
        const filteredMovies = movieDetailsArray
          .map((response) => response.data)
          .filter(
            (movie) =>
              movie.genres &&
              movie.genres
                .map((g) => g.toLowerCase())
                .includes(genre.toLowerCase())
          )
          .map((movie) => ({
            id: movie.ids.imdb, // IMDb ID
            slug: movie.ids.slug, // Trakt slug
          }));

        // console.log("Filtered Movies:", filteredMovies);
        setMovieByGenre(filteredMovies);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movies.length > 0) {
      fetchByGenre();
    } else {
      console.log("Skipping fetchByGenre because mostWatchedMovies is empty.");
    }
  }, [movies, genre]);

  const handleShowAllClick = () => {
    navigate("/all-movies", { state: { movieByGenre, genre } });
  };

  return (
    <div className="me-3">
      <div className="w-60 bg-fbox border border-fbor p-4 rounded-lg">
        <div className="grid grid-cols-2 h-52 overflow-hidden opacity-70">
          {movieByGenre.map((movie) => (
            <MoviePoster
              key={movie.id}
              imdbID={movie.id}
              h={"h-24"}
            ></MoviePoster>
          ))}
        </div>
        {top && (
          <span className="w-12 h-4 p-1 bg-butred text-xs rounded-sm">
            Top10 in
          </span>
        )}
        <div className="flex justify-between font-semibold pt-2">
          <h4>{genre}</h4>
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/?size=100&id=15816&format=png&color=ffffff"
            onClick={handleShowAllClick}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default GenreBox;
