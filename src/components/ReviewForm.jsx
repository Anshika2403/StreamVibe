import React, { useState } from "react";

const ReviewForm = ({ movieId, onSubmit, onCancel }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (rating === 0) {
      setError("Please select a star rating before submitting.");
      return;
    }

    if (!reviewText.trim()) {
      setError("Please write a review before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(movieId, reviewText.trim(), rating);
      setReviewText("");
      setRating(0);
    } catch (error) {
      setError(error.message || "Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-butred">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full min-h-[100px] bg-black-nav border border-fbor p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-butred"
          placeholder="Write your review..."
          required
        />

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <img
                src={
                  star <= (hover || rating)
                    ? "https://img.icons8.com/ios-filled/20/E50000/star.png"
                    : "https://img.icons8.com/ios/20/CCCCCC/star.png"
                }
                alt={`${star} star${star === 1 ? "" : "s"}`}
                className="w-6 h-6 transition-transform hover:scale-110"
              />
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-butred text-white rounded-md px-4 py-2 hover:bg-[#A30000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="bg-black-nav border border-fbor rounded-md px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
