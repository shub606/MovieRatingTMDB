import MovieIcon from "@mui/icons-material/Movie";
import "./Header.css";
import SimpleBottomNavigation from "./Footer.jsx";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="mainContainer">
        <span className="header">
          <MovieIcon color="pink" /> Entertainment TMDB{" "}
          <MovieIcon color="pink" />
        </span>
        {/* <Link to="/movies">Movies</Link>
      <Link to="/tvSeries">TvSeries</Link>
      <Link to="/search">Search</Link> */}

        {/* <SimpleBottomNavigation /> */}
      </div>
    </>
  );
};

export default Header;
