
// Stats.jsx
const Stats = () => (
  // <section className=" py-12">
  //   <div className="container mx-auto text-center">
      
  //     <div className="text-center mb-8">
  //         <h4 className="text-lg font-semibold text-gray-500"></h4>
  //         <h2 className="text-3xl font-bold">Our Achievements</h2>
  //         <p className="text-sm text-gray-400 mt-2">
  //           Some of the features and advantages that we provide for those of you
  //           who store data in this data warehouse.
  //         </p>
  //       </div>
  //     <div className="flex justify-around mt-8">
  //       <div>
  //         <h3 className="text-4xl font-bold text-blue-600">20+</h3>
  //         <p className="mt-2 text-gray-600">Completed Projects</p>
  //       </div>
  //       <div>
  //         <h3 className="text-4xl font-bold text-blue-600">500+</h3>
  //         <p className="mt-2 text-gray-600">Manpower</p>
  //       </div>
  //       <div>
  //         <h3 className="text-4xl font-bold text-blue-600">10+</h3>
  //         <p className="mt-2 text-gray-600">Years Exprence </p>
  //       </div>
  //       <div>
  //         <h3 className="text-4xl font-bold text-blue-600">95+</h3>
  //         <p className="mt-2 text-gray-600">Upozila Covarage</p>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                <p class="text-base mt-0.5 text-gray-500">Creating the successful path</p>
            </div>

            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
            </div>

            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
                <p class="text-base mt-0.5 text-gray-500">Working for your success</p>
            </div>
        </div>
    </div>
</section>

);

export default Stats;
