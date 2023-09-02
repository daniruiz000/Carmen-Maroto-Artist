import Header from "../components/Header";
import SectionDerech from "../components/SectionDerch";
import SectionIzq from "../components/SectionIzq";
import "../styles/layouts/Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <p>Home</p>
        <div className="home__sections">
          <SectionIzq />
          <SectionDerech />
        </div>
      </div>
    </>
  );
};

export default Home;
