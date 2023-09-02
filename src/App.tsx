import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import AboutMe from "./layouts/AbouteMe";
import Collection from "./layouts/Collection";
import Contact from "./layouts/Contact";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
