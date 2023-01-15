import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((result) => {
        const individualBeer = result.data;
        setBeer(individualBeer);
      });
  }, [beerId]);

  return (
    <div>
      <Header></Header>
      <h1>Beer Details</h1>
      <img src={beer.image_url} alt={beer.name} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <h2>{beer.first_brewed}</h2>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
