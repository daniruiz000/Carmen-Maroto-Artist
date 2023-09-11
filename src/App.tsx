import { HashRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./layouts/AbouteMe";
import Collection from "./layouts/Collection";
import Contact from "./layouts/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
