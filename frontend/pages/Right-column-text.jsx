


const RightHandText =()=>{
    return(
        <div className="bg-blue-200 py-16">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="lg:flex justify-between space-x-8">
              <!-- Left Column (Image) -->
              <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">BabyMode</h2>
                <p className="text-gray-800 mb-4">I created this game during a gamejam.</p>
                <p className="text-gray-800 mb-6">dont know what else to say(nick)</p>
                <div className="flex justify-center">
                          <a
                            href="https://moralsupportstudios.itch.io/babymode"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                          >
                            See more
                          </a>
                        </div>
              </div>

              <!-- Right Column (Text) -->
              <div className="lg:w-1/2 flex flex-col justify-center">
               <figure className="relative">
                         <a>
                           <img
                             loading="lazy"
                             src={babyMode}
                             alt="babyMode Icon"
                             className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                           />
                         </a>
                       </figure>

              </div>

            </div>

          </div>
        </div>
        )

    }