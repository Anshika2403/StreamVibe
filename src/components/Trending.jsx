import React, { useRef } from "react";
import { useSelector } from "react-redux";
import TrendingBox from "./TrendingBox";
import Heading from "./Heading";
import Slider from "./Slider";
import Container from "./container/Container";

function Trending() {
  const trendingMovies = useSelector((state) => state.movie.trendingMovies);
  const boxRef = useRef(null);
  return (
    <div className="mx-16">
      <Container>
        <div className="flex justify-between items-center">
          <Heading hcont={"Trending now"} pcont={""} />
          <Slider scrollRef={boxRef} totalItems={trendingMovies.length} />
        </div>
        <div
          className="flex justify-around overflow-hidden scroll-smooth"
          ref={boxRef}
        >
          {trendingMovies.map((movie) => (
            <TrendingBox
              movie={movie}
              key={movie.movie.ids.imdb}
              parent="Trending"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Trending;
