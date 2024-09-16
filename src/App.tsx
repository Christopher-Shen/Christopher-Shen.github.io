import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import React from "react";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/recipes" Component={Recipes} />
        </Routes>
      </Router>
    );
  }
}

export default App;
