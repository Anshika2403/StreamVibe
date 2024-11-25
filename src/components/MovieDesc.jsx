import React, { useEffect, useState, useRef, useContext } from "react";
import { MovieDetailsContext } from "./MovieDetailsContext";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Slider from "./Slider";
import {
  Director,
  Genre,
  Languages,
  MovieRelease,
  MovieSynopsis,
  MovieTitle,
  Music,
  Cast,
} from "./Details";
import MoviePoster from "./MoviePoster";
import Button from "./Button";
import Box from "./Box";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";
import service from "../appwrite/review";

function MovieDesc() {
  const [showForm, setShowForm] = useState(false);
  const boxRef = useRef();
  const [reviews, setReviews] = useState([]);
  const movieDetails = useContext(MovieDetailsContext);

  // const castNum = movieDetails.people.cast.length;
  const { slug } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      const movieReviews = await service.getReviews(slug);
      setReviews(movieReviews);
      console.log(movieReviews);
    };
    fetchReviews();
  }, [slug]);

  const handleFormSubmit = async (movieId, reviewText, rating) => {
    try {
      await service.addReview(movieId, reviewText, rating);
      const updatedReviews = await service.getReviews(movieId);
      setReviews(updatedReviews);
      setShowForm(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mx-16">
      <MovieDetails movieId={`${slug}`}>
        <div className="md:mx-24">
          <MoviePoster w={"w-full"} h={"h-80 md:h-96"} />
        </div>
        <div className="text-center">
          <div className="font-bold text-3xl">
            <MovieTitle />
          </div>
          <div className="hidden md:block text-pgray">
            <MovieSynopsis />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 me-0 my-3">
            <Button w={"w-38"} h={"h-13"} className="px-5 py-2 flex">
              {" "}
              <img
                src="https://img.icons8.com/?size=100&id=99cTBfGlewZU&format=png&color=ffffff"
                className="w-5 h-5 m-1"
              />
              <p>Play now</p>
            </Button>

            <div className="w-40 flex justify-around cursor-pointer">
              <Box
                imgSrc={
                  "https://img.icons8.com/?size=100&id=3220&format=png&color=ffffff"
                }
              />
              <Box
                imgSrc={
                  "https://img.icons8.com/?size=100&id=82788&format=png&color=ffffff"
                }
              />
              <Box
                imgSrc={
                  "https://img.icons8.com/?size=100&id=6FZ2H0xzARfg&format=png&color=ffffff"
                }
              />
            </div>
          </div>
        </div>

        <section className=" md:flex justify-around my-12">
          <div className="md:w-7/12">
            <div className="mb-2 bg-fbox rounded-lg p-8">
              <h6 className="text-pgray flex items-center mb-2">Description</h6>
              <div className="text-sm">
                <MovieSynopsis />
              </div>
            </div>
            <div className="mb-2 bg-fbox rounded-lg p-10">
              <div className="flex justify-between">
                <h6 className="text-pgray flex items-center mb-2">Cast</h6>
                <Slider
                  scrollRef={boxRef}
                  totalItems={movieDetails?.people?.cast.length}
                />
              </div>
              <div
                className="flex flex-row text-sm overflow-hidden scroll-smooth"
                ref={boxRef}
              >
                <Cast />
              </div>
            </div>
            <div className="bg-fbox rounded-lg p-10">
              {!showForm && (
                <div>
                  <div className="md:flex justify-between">
                    <h6 className="text-pgray flex items-center mb-2">
                      Reviews
                    </h6>
                    <button
                      onClick={() => setShowForm(true)}
                      className="mb-2 w-40 h-12 px-4 py-3 bg-black-box border border-fbor rounded-md"
                    >
                      Add a Review
                    </button>
                  </div>
                  <div>
                    {reviews?.length > 0 ? (
                      reviews.map((review) => (
                        <div key={review.$id} className="mb-4">
                          <strong>{review.rating} Stars:</strong>{" "}
                          {review.reviewText}
                        </div>
                      ))
                    ) : (
                      <p>No reviews yet. Be the first to add one!</p>
                    )}
                  </div>
                </div>
              )}
              {showForm && (
                <ReviewForm
                  movieId={slug}
                  onSubmit={handleFormSubmit} // Pass handler for form submission
                  onCancel={() => setShowForm(false)}
                />
              )}
            </div>
          </div>
          <div className="sm:mt-4 md:w-4/12 bg-fbox rounded-lg p-10">
            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">
                <img
                  src="https://img.icons8.com/?size=100&id=84997&format=png&color=999999"
                  className="w-4 h-4 me-1"
                />
                Released year
              </h6>
              <MovieRelease />
            </div>

            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">
                <img
                  src="https://img.icons8.com/?size=100&id=85039&format=png&color=999999"
                  className="w-4 h-4 me-1"
                />
                Available Languages
              </h6>
              <Languages />
            </div>

            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">
                <img
                  src="https://img.icons8.com/ios/50/999999/star.png"
                  className="w-4 h-4 me-1"
                />
                Ratings
              </h6>
              <div className="bg-black-box w-32 h-8 p-2 text-center rounded-sm border border-nav-bor">
                <Rating />
              </div>
            </div>

            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">
                <img
                  src="https://img.icons8.com/?size=100&id=I8fsIlLpdLgr&format=png&color=999999"
                  className="w-4 h-4 me-1"
                />
                Genres
              </h6>
              <Genre />
            </div>

            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">Director</h6>
              <Director />
            </div>

            <div className="mb-5">
              <h6 className="text-pgray flex items-center mb-2">Music</h6>
              <Music />
            </div>
          </div>
        </section>
      </MovieDetails>
    </div>
  );
}

export default MovieDesc;
