import React, { useContext } from "react";
import { MovieDetailsContext } from "./MovieDetailsContext";

const Rating = () => {
  const movieDetails = useContext(MovieDetailsContext);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const rating = Math.round(movieDetails?.rating) || 0;
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 == 1;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          className="w-4 h-4"
          src="https://img.icons8.com/ios-filled/50/E50000/star.png" // Full star
          alt="full-star"
        />
      ))}
      {hasHalfStar && (
        <img
          className="w-4 h-4"
          src="https://img.icons8.com/ios-filled/50/E50000/star-half.png" // Half star
          alt="half-star"
        />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <img
          key={index}
          className="w-4 h-4 me-1"
          src="https://img.icons8.com/ios/50/CCCCCC/star.png" // Empty star
          alt="empty-star"
        />
      ))}
    </div>
  );
};

export default Rating;
