import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeers from "../assets/new-beer.png";
import RandomBeers from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>Home Page</h1>

      <h2>
        <Link to="/beers">
          {" "}
          <img src={Beers} alt="Beers" />
          <br></br>All Beers
        </Link>
      </h2>

      <h2>
        <Link to="/new-beer">
          <img src={NewBeers} alt="Beers" />
          <br></br>Create
        </Link>
      </h2>

      <h2>
        <Link to="/random-beer">
          <img src={RandomBeers} alt="Beers" />
          <br></br>Random one
        </Link>
      </h2>
    </div>
  );
};

export default HomePage;
