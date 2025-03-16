import badge from "../src/assets/badge.png";

import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function AboutUs() {

     return (
            <>
             <div className="min-h-screen flex flex-col">
                         <div className="flex justify-center space-x-4 bg-blue-500 ">
                                                             <Link to="/">
                                                                  <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Home</button>
                                                                                                                                                   </Link>
                                                                                                                                                    <a href="https://theschlote.github.io/" target="_blank">
                                                                                                                                             <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Blog</button>
                                                                                                                                                </a>
                                                                                                                                             <Link to="/GameDev">
                                                                                                                                             <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Game Dev</button>
                                                                                                                                             </Link>
                                                                                                                                             <Link to="/Projects">
                                                                                                                                             <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Projects</button>
                                                                                                                                             </Link>
                                                                                                                                             <Link to="/AboutUs">
                                                                                                                                             <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">About Us</button>
                                                            </Link>
                                                          </div>


            <div className="hero bg-blue-200 min-h-auto">
              <div className="hero-content text-center">
                <div className="max-w-md">

                  <h1 className="text-5xl font-bold">About Us</h1>
                  <p className="py-6">
                    Welcome to Moral Support Studios where you can learn more about the team here.
                  </p>


                </div>
              </div>
            </div>
            <br />
            <div class="max-w-2xl mx-auto p-4">
                <p className="text-left">
                    <strong>Who We Are</strong><br />

                   Each of the Guys can write about them selves here. Here's mine<br /><br />

                   <strong>Who I Am</strong><br />
                   Hey there! I’m a .NET developer by profession and a game developer by passion. With years of experience in software development, I’ve built a solid
                   foundation in clean architecture, API development, and SQL, but my true creative outlet lies in game design. Moral Support Studios is my space to
                   experiment, learn, and share my journey in game development—balancing technical precision with creative storytelling.<br /><br />

                   <strong>What I Do</strong><br />
                   By day, I work as a Dev 3 in software development, specializing in .NET Core, SQL Server, ERP systems, and API development.
                   By night (or whenever time allows), I dive into indie game development using Godot 4 and C#, exploring everything from turn-based
                   combat systems to unit testing frameworks like GDUnit4 and NUnit.<br /><br />

                   Currently, my main focus is on building Corrupted Virtues, a tactical RPG inspired by classics like Gladius, blending deep mechanics
                   with mythological storytelling. Alongside that, I’m also working on a web-hosted property management app to expand my software development portfolio.<br /><br />

                   <strong>Follow my progress!</strong><br />
                   <a href="https://github.com/TheSchlote" class="text-blue-500 hover:text-blue-700 underline" target="_blank">GitHub</a><br />
                     <a href="https://x.com/Theschlote" class="text-blue-500 hover:text-blue-700 underline" target="_blank">Twitter</a>
                </p>
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


export default AboutUs;