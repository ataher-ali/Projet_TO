import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="w-full py-7  relative">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold text-gray-500">Clients</h4>
          <h2 className="text-6xl mb-8 font-bold "> <span className="text-blue-600">Respected</span> Clients and Partners</h2>
          <p className="text-sm mx-36 text-gray-700 mt-2">
          As a leading information technology Agency, we are proud to partner with businesses, companies, service providers, corporations, government agencies, etc. Please take a look at some of the leading businesses and organizations that have already partnered with <span className="font-bold">Team Oli Ullah</span>.
          </p>
        </div>
        {/* Heading End */}

        {/* Slider */}
        <Slider {...settings} className="clients_logos">
          
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/Government_Seal_of_Bangladesh.svg"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/ictd-logo.png"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/doict-logo.png"
              alt="Client 2"
              className="max-h-24 self-center"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/brl-logo.png"
              alt="Client 7"
              className="max-h-24 self-center my-8"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/Bangladesh_Hi-Tech_Park_Authority.svg"
              alt="Client 3"
              className="max-h-24 self-center"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/arena-logo.png"
              alt="Client 6"
              className="max-h-24 self-center my-8"
            />
          </div>


          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/National_University_Bangladesh-logo.png"
              alt="Client 4"
              className="max-h-24 self-center"
            />
          </div>

          

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/jica-logo.png"
              alt="Client 5"
              className="max-h-24 self-center"
            />
          </div>

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/prime_tech_logo.png"
              alt="Client 8"
              className="max-h-24 self-center my-3"
            />
          </div>

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/Forest_Department_of_Bangladesh_logo.png"
              alt="Client 8"
              className="max-h-24 self-center my-3"
            />
          </div>
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Clients/AJO.png"
              alt="Client 8"
              className="max-h-24 self-center my-3"
            />
          </div>




        </Slider>
        {/* Slider End */}
      </div>
    </section>
  );
};

export default OurClients;
