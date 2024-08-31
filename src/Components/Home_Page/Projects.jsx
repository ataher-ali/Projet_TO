import React from 'react';

const Projects = () => {
  return (
    <div>
                  <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                    1 team.<br />
                    6+ years.<br />
                    300+ projects.<br />
                </h2>
                <p class="mt-6 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <div class="lg:col-span-3 xl:col-span-4">
                <div class="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects/ledp.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects/srdl.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects/cedp.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-20 mx-auto " src="../../../public/Images/Projects/sof_logo.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects/her-power-logo.jpg" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Clients/jica-logo.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Clients/doict-logo.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Clients/Forest_Department_of_Bangladesh_logo.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Clients/AJO.png" alt="" />
                    </div>

                    {/* <div class="hidden lg:block">
                        <img class="object-contain w-full mx-auto h-20" src="../../../public/Images/Projects" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-20 mx-auto" src="../../../public/Images/Projects" alt="" />
                    </div> */}
                </div>

                <div class="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                    <div class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
};

export default Projects;