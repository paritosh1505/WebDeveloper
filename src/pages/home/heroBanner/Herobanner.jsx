import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";

const Herobanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { datafromHere, loading, error } = useFetch("/movie/upcoming"); // refer https://developer.themoviedb.org/reference/movie-upcoming-list
  const navigate = useNavigate(); //instance of usenavigate is navigate

  useEffect(() => {
    //here value will be between 1 to 20 by using Math.random()*20
    // usign optinal chaining for data
    const bgimage =
      datafromHere?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    //datafromHere?.result?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bgimage);
  }, [datafromHere]);
  //adding function for search the query
  const searchQueryHandler = (event) => {
    // api call will happen only if we hit enter button and search input should have some value
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`); // with this code if we enter any value and press enter it will redirect to that page for ex- if i enter "batman" and press enter lurl will chenge form localhost:5173 to localhost:5173:/search/batman
    }
  };

  return (
    <div className="heroBanner">
      {/*for HTML we use class = "herobanner" bt with react we use className = "heroBanner"*/}
      <div className="wrapper">
        <div className="herobannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV shows and people to discover. Explore now
          </span>
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Sarch for a movie or tv show..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
