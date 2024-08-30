import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
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
    <section className="w-full py-7 mb-10  bg-gray-100e relative">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold text-gray-500">Projects</h4>
          <h2 className="text-3xl font-bold text-blue-600"> Projects We Are Associate </h2>
          <p className="text-sm text-gray-400 mt-2">
            Some of the features and advantages that we provide for those of you
            who store data in this data warehouse.
          </p>
        </div>
        {/* Heading End */}

        {/* Slider */}
        <Slider {...settings} className="clients_logos">
          
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Projects/ledp.png"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>
          
          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Projects/srdl.png"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Projects/cedp.png"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Projects/sof_logo.png"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>

          <div className="flex flex-col justify-center items-center max-h-24 min-h-20">
            <img
              src="../../../public/Images/Projects/her-power-logo.jpg"
              alt="Client 1"
              className="max-h-24 self-center"
            />
          </div>



        </Slider>
        {/* Slider End */}
      </div>
    </section>
  );
};

export default Projects;
