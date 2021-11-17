import React from "react";
import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Lauren's New Website</h1>
        <div className="contacts">
          <a
            href="https://www.linkedin.com/in/laurenmccoydev/"
            class="contact"
            target="_blank"
          >
            <h4 className="contact">LinkedIn</h4>
          </a>
          <a href="https://github.com/LmLutec" class="contact" target="_blank">
            <h4 className="contact">Github</h4>
          </a>
        </div>
      </div>
      <div className="intro">
        <Home />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}

export default App;
