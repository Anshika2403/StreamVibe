import React from "react";
import { MovieRelease } from "./Details";
import MovieDetails from "./MovieDetails";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";

function ReleaseBox({ movie, w, h }) {
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
        <MoviePoster imdbID={movie.movie.ids.imdb} w="w-48" h="h-56" />

        <MovieDetails movieId={movie.movie.ids.slug}>
          <span className="bg-black-box border border-fbor rounded-3xl my-2 py-1 px-2 flex justify-center">
            <p className="text-xs text-pgray flex">
              <span className="me-1">Released on</span> <MovieRelease />
            </p>
          </span>
        </MovieDetails>
      </div>
    </div>
  );
}

export default ReleaseBox;
