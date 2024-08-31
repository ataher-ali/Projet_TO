import { Link } from "react-router-dom";

// AboutUs.jsx
const AboutUs = () => (
  <>
  <section class="pt-10 bg-blue-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
    <div class="px-4 mx-auto rounded-md bg-blue-300 max-w-7xl sm:px-6 lg:px-8">
        <div class="2xl:pl-24">
            <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                <div class="text-center md:py-16 xl:py-24 md:text-left">
                    <blockquote>
                        <p class="text-2xl font-semibold leading-relaxed text-gray-900">
                         “
                          Always engaged in IT training, management, and development. Also I'm Certified ICT Trainer., Graphic Design Mentor, and passionate about technology and training. 
                          ” 
                            </p>
                    </blockquote>
                    <div class="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                        <p class="text-base font-semibold text-gray-900">Sah Oli Ullah</p>
                        <p class="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">Asst. Project Manager at Babylon Resources Ltd</p>
                    </div>
                    {/* <p class="mt-12 text-base text-gray-900 lg:mt-20">Want to see Celebration in action?</p> */}
                    <Link to='/About_Us' title="" class="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-lg hover:opacity-80 focus:opacity-80" role="button"> About Us </Link>
                </div>

                <div class="relative">
                    <img class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>








  </>
    // <section className="bg-blue-50 h-fit py-12">
          
    //   <div className="  mx-2 md:mx-40 flex flex-col-reverse md:flex-row items-center">
    //     <div className="md:w-2/3 mx-4 p-10">
    //     <div className="text-center mb-8">
    //       {/* <h4 className="text-lg font-semibold ">Why We Are the Best</h4> */}
    //       <h2 className="text-3xl font-bold  text-blue-500">About Us</h2>
    //       <p className="text-md text-gray-500  mt-8 text-justify">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi, cupiditate deserunt fugit ducimus delectus itaque. Praesentium possimus ut, iusto molestiae velit fugit, amet odit, porro tempore vero deleniti iure soluta suscipit neque autem earum nam molestias inventore ipsa sint! Culpa temporibus fuga ullam corrupti alias aspernatur recusandae nihil eligendi maxime, quo, nemo distinctio facere molestias facilis commodi adipisci? In quam quaerat aliquid quidem, minus consequuntur. Velit magnam nesciunt aliquam culpa aspernatur, eos debitis minus labore enim tenetur amet fugit id fugiat illum aut repellat cum cumque impedit, eius nobis sint molestias alias! Excepturi, sequi? Sequi, consequatur. Obcaecati, impedit ipsa! Itaque similique voluptate exercitationem, explicabo quasi soluta aut perferendis atque quo natus porro voluptatem quisquam neque? Earum, reprehenderit ad ea consequatur, atque at dicta a eligendi id maiores voluptatem unde necessitatibus sed? Quaerat sint aliquid voluptatum quas? Ad, nobis consectetur aspernatur saepe, veritatis numquam quos perspiciatis, tenetur reprehenderit libero repellendus!
            
    //       </p>
          
    //     </div>
    //     </div>
    //     <div className="md:w-1/3">
    //       <img  src="https://media.licdn.com/dms/image/v2/D5603AQGmJymuRm5yLg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699866196237?e=1730332800&v=beta&t=1MRRKF0iLNvHNB4OTgfyq0NeIep4SHTTwxy_qgZWgcI" alt="About Us" 
    //       className=" h-96 rounded-lg shadow-xl"/>
    //     </div>
    //   </div>

    // </section>
  );
  
  export default AboutUs;
  