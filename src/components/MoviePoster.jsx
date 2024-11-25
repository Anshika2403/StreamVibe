import React, { useEffect, useState, useContext } from "react";
import config from "../conf/conf";
import axios from "axios";
import { MovieDetailsContext } from "./MovieDetailsContext";

function MoviePoster({imdbID, w = "w-36", h = "h-40"}) {
  const [poster, setPoster] = useState("");
  const OMDB = config.omdbApiKey;

  const movieDetails = useContext(MovieDetailsContext);
  useEffect(() => {
    if (!imdbID && movieDetails?.ids?.imdb) {
      imdbID = movieDetails.ids.imdb;
    }

    if (imdbID) {
      const fetchPoster = async () => {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB}`
          );
          if (response.data.Poster) {
            setPoster(response.data.Poster);
          } else {
            console.error("Poster not found in OMDB response", response.data);
          }
        } catch (error) {
          console.error("Error fetching poster", error);
        }
      };

      fetchPoster();
    }
  }, [imdbID, movieDetails]);

  return (
    <div>
      <img src={poster} alt="Poster" className={`${w} ${h} rounded-xl my-1 px-1`}></img>
    </div>
  );
}

export default MoviePoster;
