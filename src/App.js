import { Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";
import AllBeers from "./views/AllBeers.jsx";
import RandomBeer from "./views/RandomBeer.jsx";
import NewBeer from "./views/NewBeer.jsx";
import SingleBeer from "./views/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
