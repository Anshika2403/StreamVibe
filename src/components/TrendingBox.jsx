import React from "react";
import MoviePoster from "./MoviePoster";
import MovieDetails from "./MovieDetails";
import { MovieViews, Runtime } from "./Details";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

function TrendingBox({ movie, w = "w-52", h = "h-72", parent }) {
  const navigate = useNavigate();
  const handleClick = (slug) => {
    navigate(`/movies/${slug}`);
  };
  return (
    <div className="mx-3">
      <div
        className={`${w} ${h} p-4 bg-fbox border border-fbor rounded-lg cursor-pointer`}
        onClick={() => handleClick(movie.movie.ids.slug)}
      >
        <MoviePoster
          imdbID={movie.movie.ids.imdb}
          w={parent === "Trending" ? "w-48" : "w-60"}
          h={parent === "Trending" ? "h-56" : "h-60"}
        />

        <MovieDetails movieId={movie.movie.ids.slug}>
          <div className="flex justify-between mt-2">
            <span className="bg-black-box border border-fbor rounded-3xl py-1 px-2 flex">
              <img
                className="w-4 h-4 me-1"
                src="https://img.icons8.com/?size=100&id=xhTXOR46xziA&format=png&color=999999"
              ></img>
              <Runtime />
            </span>
            <span className="bg-black-box border border-fbor rounded-3xl py-1 px-2 flex">
              {parent === "Trending" ? (
                <img
                  className="w-4 h-4 me-1"
                  src="https://img.icons8.com/?size=100&id=85130&format=png&color=999999"
                ></img>
              ) : (
                <Rating />
              )}
              <MovieViews />
            </span>
          </div>
        </MovieDetails>
      </div>
    </div>
  );
}

export default TrendingBox;
