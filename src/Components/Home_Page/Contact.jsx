import React from 'react';

const Contact = () => {
    return (
        <section className=" bg-gray-50">
        <div className=" mx-4 lg:mx-40  flex flex-wrap items-center justify-between px-6">
            {/* Contact us left content box */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <div className="">
                    <img
                        src="../../../public/Images/contact2.svg"
                        alt="Contact Us"
                        className="w-full p-10 h-full  object-contain"
                    />
                </div>
            </div>
            {/* Contact us right content box */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-6 ">
                    Need help? <br /> Don't worry, just contact us
                </h2>
                <form action=" " className="w-full max-w-lg flex flex-col">
                    <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none my-4 focus:border-blue-600 caret-blue-600"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none my-4 focus:border-blue-600 caret-blue-600"
                    />
                    <textarea
                        placeholder="Message"
                        cols="30"
                        rows="5"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none mb-4 focus:border-blue-600 caret-blue-600"
                    ></textarea>
                    <button
                        id="btn1"
                        type="submit"
                        className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;