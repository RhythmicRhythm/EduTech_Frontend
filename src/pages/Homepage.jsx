import Hero from "../components/HomepageComponents/Hero";
import Navbar from "../components/HomepageComponents/Navbar";
import About from "../components/HomepageComponents/About";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Homepage;
