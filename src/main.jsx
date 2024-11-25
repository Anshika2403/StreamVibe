import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieList from "./pages/MovieList.jsx";
import SupportP from "./pages/SupportP.jsx";
import Subscription from "./pages/Subscription.jsx";
import MovieOpen from "./pages/MovieOpen.jsx";
import MovieGenre from "./components/MovieGenre.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import {ProtectedRoute} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><App /> </ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: 
        <MovieList />,
      },
      {
        path: "/movies/:slug",
        element:
            <MovieOpen />
         
      },{
        path:"/all-movies",
        element:
            <MovieGenre />
          ,
      },

      {
        path: "/support",
        element: 
            <SupportP />
          ,
      },
      {
        path: "/subscription",
        element: 
          
            <Subscription />
          ,
      },
      {
        path:"/signup",
        element:<SignUp/>
      },{
        path:"/login",
        element:<Login />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
