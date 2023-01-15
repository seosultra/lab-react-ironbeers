import React from "react";
import axios from "axios";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      const beerList = result.data;
      setBeers(beerList);
    });
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="allBeers">
        {beers.map((beer) => {
          return (
            <>
              <div key={beer._id} className="beer">
                <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt="Beer" className="beersImg" />
                </Link>
                <div className="beerText">
                  <h1>{beer.name}</h1>
                  <br></br>
                  <h2>{beer.tagline}</h2>
                  <br></br>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
              <hr></hr>
            </>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default AllBeers;
