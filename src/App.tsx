import React from 'react';
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import StreetFriedTofu from "./pages/Recipes/StreetFriedTofuRecipe";
import GroundBeefSauce from "./pages/Recipes/GroundBeefSauceRecipe";
import ComingSoonRecipe from "./pages/Recipes/ComingSoonRecipe";
import BoiledBeefSlices from "./pages/Recipes/BoiledBeefSlices";
import logo from "./assets/logo512.png";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/street-fried-tofu" element={<StreetFriedTofu />} />
        <Route path="/recipes/ground-beef-sauce" element={<GroundBeefSauce />} />
        <Route path="/recipes/coming-soon-recipe" element={<ComingSoonRecipe />} />
        <Route path="/recipes/boiled-beef-slices" element={<BoiledBeefSlices />} />
        <Route path="/media/logo.jpg" element={<img src={logo} alt="logo" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
