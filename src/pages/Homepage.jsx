import Hero from "../components/HomepageComponents/Hero";
import Navbar from "../components/HomepageComponents/Navbar";
import About from "../components/HomepageComponents/About";
import Cta from "../components/HomepageComponents/Cta";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cta />
    </div>
  );
};

export default Homepage;
