import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import Login from "./pages/Home"
import React from "react";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Routes>
          <Route Component={Home} />
        </Routes>
      </Router>
    );
  }
}

export default App;
