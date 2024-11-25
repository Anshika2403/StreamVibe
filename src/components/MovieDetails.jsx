import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetailsContext } from './MovieDetailsContext';
import config from '../conf/conf';

const MovieDetails = ({ movieId, children }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, statsResponse, peopleResponse] = await Promise.all([
          axios.get(`https://api.trakt.tv/movies/${movieId}?extended=full`, {
            headers: {
              'Content-Type': 'application/json',
              'trakt-api-key': config.traktClientId,
              'trakt-api-version': '2',
            },
          }),
          axios.get(`https://api.trakt.tv/movies/${movieId}/stats`, {
            headers: {
              'Content-Type': 'application/json',
              'trakt-api-key': config.traktClientId,
              'trakt-api-version': '2',
            },
          }),
          axios.get(`https://api.trakt.tv/movies/${movieId}/people`, {
            headers: {
              'Content-Type': 'application/json',
              'trakt-api-key': config.traktClientId,
              'trakt-api-version': '2',
            },
          }),
        ]);
  
        const movieData = movieResponse.data;
        const statsData = statsResponse.data;
        const peopleData = peopleResponse.data;
   
        setMovieDetails({
          ...movieData,
          views: Math.floor(statsData.plays / 1000),
          people: {
            cast: peopleData?.cast || [],
            crew: peopleData?.crew || {},
          },
        });
 
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
  
    fetchMovieDetails();
  }, [movieId]);
  
  return (
    <MovieDetailsContext.Provider value={movieDetails}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

export default MovieDetails;
