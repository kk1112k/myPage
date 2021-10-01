import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Skills from "./Component/Skills";



const App = (props) => {
  return (
    <div className="App">
      <Header /> 
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
    </div>
  );
};

export default App;
