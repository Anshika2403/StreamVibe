import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MoviePoster from "./MoviePoster";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import "./HomePoster.css";

function HomePoster() {
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      offset: 200,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [dispatch, isSmallScreen]);

  const popularMovies = useSelector(
    (state) => state.movie.popularMovies,
    (prev, next) => prev === next
  );
  const displayedMovies = isSmallScreen
    ? popularMovies.slice(0, 8)
    : popularMovies;

  return (
    <div className="h-full">
      <div className="z-0 h-full flex flex-wrap  justify-around absolute top-3 opacity-30 overflow-hidden">
        {displayedMovies.map((movie) => (
          <MoviePoster key={movie.ids.imdb} imdbID={movie.ids.imdb} />
        ))}
      </div>
      <div>
        <img
          src="assets/Design.png"
          className="mx-auto mt-16 transform transition-transform duration-2000 hover:rotate-360"
        ></img>
      </div>
      <div className="my-11" data-aos="fade-up" data-aos-duration="2000">
        <Heading
          hsize={"text-3xl md:text-4xl"}
          psize={"text-sm"}
          hcont={"The Best Streaming Experience"}
          pcont={
            "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."
          }
          hclassName={"text-center"}
          pclassName={"text-center md:mx-32 py-4"}
        />
        <button className="w-52 h-12 flex justify-center items-center mx-auto -mt-5 but">
          <img
            src="https://img.icons8.com/?size=100&id=99cTBfGlewZU&format=png&color=ffffff"
            className="w-5 h-5 m-1"
          />
          Start Watching now
        </button>
      </div>
    </div>
  );
}

export default HomePoster;
