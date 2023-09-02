import React from "react";
import Header from "./components/Header";
import SectionDerech from "./components/SectionDerch";
import SectionIzq from "./components/SectionIzq";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SectionDerech />
      <SectionIzq />
    </div>
  );
};

export default App;
