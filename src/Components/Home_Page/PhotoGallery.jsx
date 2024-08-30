import React from 'react';
import Slider from 'react-slick';

const PhotoGallery = () => {
    const sliderSettings = {
        autoplay: true,
        
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      return (
        <div>
            <section className="py-11 px-10 my-20 bg-blue-500">
        <div className="text-center mb-8">
          {/* <h4 className="text-lg font-semibold text-gray-500">Why We Are the Best</h4> */}
          {/* <h2 className="text-3xl font-bold text-white">Photo Gallery</h2> */}
          {/* <p className="text-sm text-gray-400 mt-2">
            Some of the features and advantages that we provide for those of you
            who store data in this data warehouse.
          </p> */}
        </div>
        <div className='mx-4 lg:mx-40'>
        <Slider {...sliderSettings}>
          <div className='p-4 '>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQGgJfuIswjItw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724622882543?e=1725472800&v=beta&t=0jZkIOpV5bivD3g2RZ7ZKGi6l6vRzOsehr9Jq9WV_cw"
              alt="Gallery 1"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className='p-4'>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQHwrJORMf2OFQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724697443832?e=1725472800&v=beta&t=yCNna88v1LvU84ovOVNtk2Pp76xLys57991pCnjc9bQ"
              alt="Gallery 2"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className='p-4'>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQG0Hz8ZBcSjCQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724626345471?e=1725472800&v=beta&t=QrY7A61OSi-3GLh6Oh9BqfhDIGiE-nynE8JZ0ttqwuM"
              alt="Gallery 3"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className='p-4'>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQENWZ32qXRQ-Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724625108943?e=1725472800&v=beta&t=mon6jwWX2ApDhEps7dXDIAOwfirwIjhMc1TteKT5xnM"
              alt="Gallery 4"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className='p-4'>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQEG7i7VYNS15g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724625644562?e=1725472800&v=beta&t=e7mYAWNmVRHGjYvxiUGmzEUNahj6xPEndA8t5qC9nyA"
              alt="Gallery 5"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className='p-4'>
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQE5H_nKVlSIeQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724626249840?e=1725472800&v=beta&t=0riuG8LkqKhIx3FehSC-1AeJDk7nI58XrAysITVuF3Y"
              alt="Gallery 6"
              className=" w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </Slider>
        </div>
      </section>
        </div> 
    );
};

export default PhotoGallery;