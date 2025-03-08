import badge from "../src/assets/badge.png";
import cv from "../src/assets/cv.png";
import babyMode from "../src/assets/babyMode.png"
function Home() {

    return (
        <>
        <div class="hero bg-blue-200 min-h-auto">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">Moral Support</h1>
              <p class="py-6">
                This site is to show off my skills and the journey im on to build games.
              </p>
              <div class="drawer">
                      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                      <div class="drawer-content">
              {/*           <!-- Page content here --> */}
                        <label for="my-drawer" class="btn btn-primary drawer-button">visit the journey</label>
                      </div>
                      <div class="drawer-side">
                        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/*             <!-- Sidebar content here --> */}
                          <li><a href="https://theschlote.github.io/" target="_blank">Blog</a></li>
                          <li><a>Sidebar Item 2</a></li>
                        </ul>
                      </div>
                    </div>
            </div>
          </div>
        </div>
<div class="bg-gray-200 py-16">
  <div class="max-w-screen-xl mx-auto px-4">
    <div class="lg:flex justify-between space-x-8">
{/*       <!-- Left Column (Image) --> */}
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <figure class="relative">
          <a>
            <img
              loading="lazy"
              src={cv}
              alt="cv Icon"
              class="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </a>
        </figure>
      </div>

{/*       <!-- Right Column (Text) --> */}
      <div class="lg:w-1/2 flex flex-col justify-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Corrupted Virtues</h2>
        <p class="text-gray-800 mb-4">This is a game that i was inspired to make and had some of my friends help with getting into development.</p>
        <p class="text-gray-800 mb-6">dont know what else to say(nick)</p>

        <div class="flex justify-center">
          <a

            target="_blank"
            rel="noreferrer noopener"
            class="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            See more
          </a>
        </div>

      </div>

    </div>

  </div>
</div>
<div class="bg-blue-200 py-16">
  <div class="max-w-screen-xl mx-auto px-8">
    <div class="lg:flex justify-between space-x-8">
{/*       <!-- Left Column (Image) --> */}
      <div class="lg:w-1/2 mb-8 lg:mb-0">
<h2 class="text-3xl font-semibold text-gray-800 mb-4">BabyMode</h2>
        <p class="text-gray-800 mb-4">I created this game during a gamejam.</p>
        <p class="text-gray-800 mb-6">dont know what else to say(nick)</p>
        <div class="flex justify-center">
                  <a
                    href="https://moralsupportstudios.itch.io/babymode"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    See more
                  </a>
                </div>
      </div>

{/*       <!-- Right Column (Text) --> */}
      <div class="lg:w-1/2 flex flex-col justify-center">
       <figure class="relative">
                 <a>
                   <img
                     loading="lazy"
                     src={babyMode}
                     alt="babyMode Icon"
                     class="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                   />
                 </a>
               </figure>

      </div>

    </div>

  </div>
</div>
<br />



<footer class="footer footer-horizontal footer-center bg-blue-200 text-black-content p-10">
  <aside>
<img src={badge} alt="My Badge" width="50" height="50" />    <p class="font-bold">
      Moral Support Studios
      <br />
      In Development
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>


        </>
    );
    }

export default Home;