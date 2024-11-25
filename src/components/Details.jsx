import React, { useContext } from "react";
import { MovieDetailsContext } from "./MovieDetailsContext";

const MovieTitle = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return <h1>{movieDetails?.title || "Loading..."}</h1>;
};

const MovieSynopsis = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return <p>{movieDetails?.overview || "Loading synopsis..."}</p>;
};

const Runtime = () => {
  const movieDetails = useContext(MovieDetailsContext);

  if (!movieDetails || !movieDetails.runtime) {
    return <p>Loading runtime...</p>;
  }

  const hr = Math.floor(movieDetails.runtime / 60);
  const min = movieDetails.runtime % 60;

  return <p className="text-xs text-pgray">{`${hr}h ${min}min`}</p>;
};

const MovieViews = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return (
    <p className="text-xs text-pgray">
      {movieDetails ? `${movieDetails.views}K` : "Loading views..."}
    </p>
  );
};

const MovieRelease = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return <p>{movieDetails?.released || "Loading..."}</p>;
};

const Languages = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return (
    <div className="flex me-3">
      {movieDetails?.languages.map((lang) => (
        <p
          key={lang}
          className="bg-black-box w-16 text-center rounded-sm border border-nav-bor"
        >
          {lang}
        </p>
      ))}
    </div>
  );
};

const Genre = () => {
  const movieDetails = useContext(MovieDetailsContext);

  return (
    <div className="flex flex-wrap">
      {movieDetails?.genres.map((gen) => (
        <p
          key={gen}
          className="bg-black-box p-2 text-center rounded-sm border border-nav-bor me-2"
        >
          {gen[0].toUpperCase() + gen.slice(1)}
        </p>
      ))}
    </div>
  );
};

const Director = () => {
  const movieDetails = useContext(MovieDetailsContext);

  if (!movieDetails?.people?.crew?.directing) {
    return <p>Loading director...</p>;
  }

  const director = movieDetails.people.crew.directing.find(
    (person) => person.job === "Director"
  );

  return (
    <p className="bg-black-box w-full p-2 text-center rounded-sm border border-nav-bor me-2">
      {director?.person?.name || "Director information unavailable"}
    </p>
  );
};

const Music = () => {
  const movieDetails = useContext(MovieDetailsContext);

  if (!movieDetails?.people?.crew?.sound) {
    return <p>Loading music...</p>;
  }

  const music = movieDetails.people.crew.sound.find(
    (person) => person.jobs === "Music"
  );

  return (
    <p className="bg-black-box w-full p-2 text-center rounded-sm border border-nav-bor me-2">
      {music?.person?.name || "Unavailable"}
    </p>
  );
};

const Cast = () => {
  const movieDetails = useContext(MovieDetailsContext);

  if (!movieDetails?.people?.cast) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex">
      {movieDetails.people.cast.map((ppl) => (
        <p className="text-center w-32 flex items-center justify-center bg-black-box p-1 rounded-sm border border-nav-bor me-2">
          {ppl.person.name}
        </p>
      ))}
    </div>
  );
};

export {
  MovieTitle,
  MovieSynopsis,
  Runtime,
  MovieViews,
  MovieRelease,
  Languages,
  Genre,
  Director,
  Music,
  Cast,
};
