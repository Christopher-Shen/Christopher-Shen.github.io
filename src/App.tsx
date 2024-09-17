import React from 'react';
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import StreetFriedTofu from "./pages/Recipes/StreetFriedTofuRecipe";
import GroundBeefSauce from "./pages/Recipes/GroundBeefSauceRecipe";
import ComingSoonRecipe from "./pages/Recipes/ComingSoonRecipe";
import BoiledBeefSlices from "./pages/Recipes/BoiledBeefSlices";
import CabbageStirfry from "./pages/Recipes/CabbageStirfryRecipe";
import ChickenAdobo from "./pages/Recipes/ChickenAdoboRecipe";
import SquidAndChive from "./pages/Recipes/SquidAndChiveRecipe";
import BokChoy from "./pages/Recipes/BokChoyRecipe";

import logo512 from "./assets/logo512.png"
import groundBeefSauceImg from "./assets/ground_beef_sauce.jpg"

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
        <Route path="/recipes/cabbage-stirfry" element={<CabbageStirfry />} />
        <Route path="/recipes/chicken-adobo" element={<ChickenAdobo />} />
        <Route path="/recipes/squid-and-chive" element={<SquidAndChive />} />
        <Route path="/recipes/bok-choy" element={<BokChoy />} />

        <Route path="/media/logo512.png" element={<img src={logo512} alt="logo" />} />
        <Route path="/media/ground_beef_sauce.jpg" element={<img src={groundBeefSauceImg} alt="ground beef sauce" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
