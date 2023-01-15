import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const createBeer = (newBeer) =>
    api.post("/new", newBeer).then((response) => response.data);

  const api = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
  });

  const initialData = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewer_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const handleFormSubmission = (e) => {
    e.preventDefault();
    createBeer(data).then(() => navigate("/beers"));
  };
  const handleInputData = (e) => {
    const { name, value, valueAsNumber } = e.target;
    setData({
      ...data, // whatever it had before
      [name]: valueAsNumber || value,
    });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInputData}
          value={data.name}
        />
        <label htmlFor="name">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={data.tagline}
          onChange={handleInputData}
        />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={data.description}
          onChange={handleInputData}
        />
        <label htmlFor="name">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={data.first_brewed}
          onChange={handleInputData}
        />
        <label htmlFor="name">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={data.contributed_by}
          onChange={handleInputData}
        />
        <label htmlFor="name">Brewer Tips</label>
        <input
          type="text"
          name="brewer_tips"
          id="brewer_tips"
          value={data.brewer_tips}
          onChange={handleInputData}
        />
        <label htmlFor="name">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={data.attenuation_level}
          onChange={handleInputData}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
