import React from "react";
import MovieDetails from "./MovieDetails";
import { MovieTitle } from "./Details";
import MoviePoster from "./MoviePoster";
import { useLocation, useNavigate } from "react-router-dom";

function MovieGenre() {
  const location = useLocation();
  const { movieByGenre, genre } = location.state;

  const navigate = useNavigate();
  const handleClick = (slug) => {
    navigate(`/movies/${slug}`);
  };

  return (
    <div className="mx-16">
      <h2 className="text-3xl text-center bold">{genre} Movies</h2>
      <div className="flex flex-wrap ">
        {movieByGenre.map((movie) => (
          <div
            key={movie.id}
            className="m-4 w-52 h-[300px] p-4 bg-fbox border border-fbor rounded-lg cursor-pointer flex flex-col justify-between"
            onClick={() => handleClick(movie.slug)}
          >
            <MoviePoster imdbID={movie.id} w="w-48" h="h-56" />
            <MovieDetails movieId={movie.slug}>
              <span className=" bg-black-box border border-fbor rounded-3xl py-1 px-2 flex justify-center items-center">
                <p className="text-xs text-center text-pgray ">
                  <MovieTitle />
                </p>
              </span>
            </MovieDetails>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGenre;
