import React, { useRef } from "react";
import GenreBox from "./GenreBox";
import Heading from "./Heading";
import Container from "./container/Container";
import Slider from "./Slider";

function Genre() {
  const genreList = ["Adventure", "Action", "Comedy", "Drama", "Horror"];
  const boxRef = useRef(null);
  return (
    <div className="mx-16">
      <Container>
        <div className="mb-4 md:flex justify-between items-center">
          <Heading
            hcont={"Explore our wide variety of categories"}
            pcont={
              "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            }
          />
          <Slider scrollRef={boxRef} totalItems={genreList.length} />
        </div>
        <div
          className="flex justify-around overflow-hidden scroll-smooth"
          ref={boxRef}
        >
          {genreList.map((genre) => (
            <GenreBox genre={genre} key={genre} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Genre;
