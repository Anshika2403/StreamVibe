import React, { useRef } from "react";
import { useSelector } from "react-redux";
import TrendingBox from "./TrendingBox";
import Heading from "./Heading";
import Slider from "./Slider";
import Container from "./container/Container";

function MustWatch() {
  const boxRef = useRef(null);
  const favouriteMovies = useSelector((state) => state.movie.favouriteMovies);
  return (
    <div className="mx-16">
      <Container>
      <div className="flex justify-between items-center">
        <Heading hcont={"Must-Watch Movies"} pcont={""} />
        <Slider scrollRef={boxRef} totalItems={favouriteMovies.length} />
      </div>
      <div
        className="flex justify-around scroll-smooth overflow-hidden"
        ref={boxRef}
      >
        {favouriteMovies.map((movie) => (
          <TrendingBox
            movie={movie}
            key={movie.movie.ids.imdb}
            parent="Favourite"
            w="w-64"
            h="h-80"
          />
        ))}
      </div>
      </Container>
    </div>
  );
}

export default MustWatch;
