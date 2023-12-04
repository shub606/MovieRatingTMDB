import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/Footer.jsx";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Movies from "./Components/Pages/Movies";
import Search from "./Components/Pages/Search";
import TvSeries from "./Components/Pages/TVSeries";
import Trending from "./Components/Pages/Trending";
import "./index.css";

// const myRouter = createBrowserRouter([
//   { path: "/", element: <Trending /> },
//   { path: "/movies", element: <Movies /> },
//   { path: "/tvSeries", element: <TvSeries /> },
//   { path: "/search", element: <Search /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={myRouter} />
  <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Trending />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/tvSeries"} element={<TvSeries />} />
        <Route path={"/search"} element={<Search />} />
      </Routes>
    </BrowserRouter>
  </>
);
