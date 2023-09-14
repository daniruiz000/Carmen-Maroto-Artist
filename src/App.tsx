import { HashRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./layouts/AbouteMe";
import Collection from "./layouts/Collection";
import Contact from "./layouts/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PictureDetail from "./layouts/PictureDetail";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <body>
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/picture-detail/:id" element={<PictureDetail />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </body>
      <Footer />
    </HashRouter>
  );
};

export default App;
