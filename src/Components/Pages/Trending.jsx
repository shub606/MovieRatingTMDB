import axios from "axios";
import SimpleBottomNavigation from "../Footer";
import Header from "../Header";
import { useEffect, useState } from "react";
import SingleContent from "./SIngleContent/SingleContent";
import "./trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      //   console.log("Inside useeffect Fetch Trending");n
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2a7dac785cdd46da7e617abba0adcf9e`
      );

      console.log("return of axios trending movies", data.results);
      setContent(data.results);
    };
    fetchTrending();
  }, []);

  return (
    <>
      <Header />
      <h1>This is trending page </h1>
      <div className="trendingPage">
        {" "}
        {content.map((item, index) => (
          <SingleContent
            key={index}
            media_type={item.media_type}
            original_title={item.original_title || item.name}
            poster_path={item.poster_path}
            release_date={item.release_date || item.first_air_date}
          />
        ))}
      </div>

      <SimpleBottomNavigation />
    </>
  );
};

export default Trending;
