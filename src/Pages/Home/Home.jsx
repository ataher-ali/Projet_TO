import React from "react";
import Hero from "../../Components/Home_Page/Hero";
import AboutUs from "../../Components/Home_Page/AboutUs";
import Stats from "../../Components/Home_Page/Stats";
import WhyUs from "../../Components/Home_Page/WhyUs";
import PhotoGallery from "../../Components/Home_Page/PhotoGallery";
import OurClients from "../../Components/Home_Page/OurClients";
import Projects from "../../Components/Home_Page/Projects";
import Contact from "../../Components/Home_Page/Contact";
import Solutions from "../../Components/Home_Page/Solutions";


const Home = () => {
  return (
    <div>
      <Hero></Hero>

      <div className="mx-4 py-4 lg:mx-40">
      
      <Projects></Projects>
      </div>
      <AboutUs></AboutUs>
      {/* <Solutions></Solutions> */}
      <div className="mx-4 lg:mx-40">
        <OurClients></OurClients>
      </div>
      <PhotoGallery></PhotoGallery>
      <div className="mx-4 lg:mx-40">
        {/* <Stats></Stats> */}
      </div>
        <WhyUs></WhyUs>
      <Contact></Contact>
      
    </div>
  );
};

export default Home;
