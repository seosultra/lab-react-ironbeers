import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer(props) {
  const BeerContent = (props) => {
    const { name, image_url, tagline } = props.beer;
    console.log(name, image_url, tagline);
    return (
      <div>
        <h1>Random beer</h1>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <img src={image_url} alt={name} />
      </div>
    );
  };

  const api = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
  });

  const randomBeer = () => api.get("/random").then((response) => response.data);

  const [beer, setBeer] = useState({});
  useEffect(() => {
    randomBeer().then((data) => setBeer(data));
  }, []);

  return (
    <div>
      <Header />
      <BeerContent beer={beer} />
    </div>
  );
}

export default RandomBeer;
