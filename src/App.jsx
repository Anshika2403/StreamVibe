import React,{useEffect} from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies,fetchTrendingMovies,fetchFavouriteMovies,fetchMostWatchedMovies,fetchNewReleaseMovies } from "./store/movieActions";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie.loading);
  // const popularMovies = useSelector((state) => state.movie.popularMovies);
  // console.log(popularMovies)
  // const mostWatchedMovies = useSelector((state) => state.movie.mostWatchedMovies)
    // console.log(loading)
   useEffect(() => {
    dispatch(fetchMostWatchedMovies())
    dispatch(fetchPopularMovies())
    dispatch(fetchTrendingMovies())
    dispatch(fetchFavouriteMovies())
    dispatch(fetchNewReleaseMovies())
   },[dispatch])


  return (
    <div>
    <Header />
    <main>
    {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Outlet />
        </>
      )}
</main>
    <Footer />
    </div>
  );
}

export default App;
