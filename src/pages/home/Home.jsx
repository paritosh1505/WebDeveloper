import React from "react";
import "./home.scss";
import Herobanner from "./HeroBanner/Herobanner";

const home = () => {
  return (
    <div className="homePage">
      <Herobanner />{" "}
      {/* importing all the componenet for hero banner here if we use small h for importing component react will not able to recognize it hence always start with capital letter */}
    </div>
  );
};

export default home;
