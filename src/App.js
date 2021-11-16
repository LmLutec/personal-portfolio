import React from "react";
import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <h1>Lauren's New Website</h1>
      <div className="intro">
        <Home />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}

export default App;
