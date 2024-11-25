import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import ReleaseBox from "./ReleaseBox";
import Slider from "./Slider";
import Container from "./container/Container";

function NewReleases() {
  const boxRef = useRef(null);
  const newReleaseMovies = useSelector((state) => state.movie.newReleaseMovies);

  return (
    <div className="mx-16">
      <Container>
        <div className="flex justify-between items-center">
          <Heading hcont={"New Releases"} pcont={""} />
          <Slider scrollRef={boxRef} totalItems={newReleaseMovies.length} />
        </div>
        <div
          className="flex justify-around overflow-hidden scroll-smooth"
          ref={boxRef}
        >
          {newReleaseMovies.map((movie) => (
            <ReleaseBox movie={movie} w="w-52" h="h-72" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default NewReleases;
