import React, { useRef } from "react";
import Heading from "./Heading";
import GenreBox from "./GenreBox";
import Slider from "./Slider";

function Top() {
  const genreList = ["Adventure", "Action", "Thriller", "Fantasy", "Crime"];
  const boxRef = useRef(null);
  return (
    <div className="mx-16">
      <div className="flex justify-between items-center">
        <Heading hcont={"Popular Top 10 In Genres"} pcont={""} />
        <Slider scrollRef={boxRef} totalItems={genreList.length} />
      </div>
      <div
        className=" flex justify-around overflow-hidden scroll-smooth "
        ref={boxRef}
      >
        {genreList.map((genre) => (
          <GenreBox genre={genre} key={genre} top={true} />
        ))}
      </div>
    </div>
  );
}

export default Top;
