import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import "./footer.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import makeStyles from "@mui/material-ui/core/styles";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  // const history = useHistory();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (value === 0) {
  //     // console.log("trend");
  //     navi("/");
  //   } else if (value === 1) {
  //     navi("/movies");
  //   } else if (value === 2) {
  //     navi("/tvSeries");
  //   }
  // }, [value, navi]);

  return (
    <div className="footer">
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log("val", newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="trending"
            icon={<WhatshotIcon />}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction
            label="movie"
            icon={<MovieIcon />}
            onClick={() => navigate("/movies")}
          />
          <BottomNavigationAction
            label="TvSearies"
            icon={<TvIcon />}
            onClick={() => navigate("/tvSeries")}
          />
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon />}
            onClick={() => navigate("/search")}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
