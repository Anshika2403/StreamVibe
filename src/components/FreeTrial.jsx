import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MoviePoster from "./MoviePoster";
import Heading from "./Heading";
import Button from "./Button";

function FreeTrial() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const displayedMovies = popularMovies.slice(0, 28);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [isSmallScreen]);

  return (
    <div className="my-16  mx-8 md:mx-auto h-80 md:h-64 w-5/6 md:w-3/4 overflow-clip relative rounded-xl">
      <div className="flex flex-wrap absolute top-1/2 transform -translate-y-1/2 opacity-40 z-0 md:ps-12 pe-0">
        {displayedMovies.map((movie) => (
          <MoviePoster
            key={movie.ids.imdb}
            imdbID={movie.ids.imdb}
            w={" w-36 md:w-40"}
            h={"h-24"}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-red z-20 px-14 py-12 md:py-24 md:flex justify-between">
        <Heading
          hcont={"Start your free trial today!"}
          pcont={
            "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
          }
        />
        <Button w={"w-36"} h={"h-10"} className={"px-5 py-2 text-sm "}>
          Start a free Trial{" "}
        </Button>
      </div>
    </div>
  );
}

export default FreeTrial;
