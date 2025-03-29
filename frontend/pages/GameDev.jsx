import badge from "../src/assets/badge.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function GameDev () {


return (
                           <>
                            <div className="min-h-screen flex flex-col">
                                        <NavBar />
                           <div className="hero bg-blue-200 min-h-auto">
                             <div className="hero-content text-center">
                               <div className="max-w-md">
                                 <h1 className="text-5xl font-bold">Game Development</h1>
                                 <p className="py-6">
                                   This is where you can see what all we are working on.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div class="navbar bg-base-100 shadow-sm bg-blue-500">
                             <div class="navbar-start">
                               <div class="dropdown">
                                 <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                 </div>
                                 <ul
                                   tabindex="0"
                                   class="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                   <li><a>Item 1</a></li>
                                   <li>
                                     <a>Parent</a>
                                     <ul class="p-2">
                                       <li><a>Submenu 1</a></li>
                                       <li><a>Submenu 2</a></li>
                                     </ul>
                                   </li>
                                   <li><a>Item 3</a></li>
                                 </ul>
                               </div>
                             </div>
                             <div class="navbar-center hidden lg:flex">
                                <ul class="menu menu-horizontal px-1">
                                  <li class="bg-blue-500 hover:bg-blue-600 text-white rounded">
                                    <a href="https://github.com/TheSchlote/CorruptedVirtues-TacticsRPG" target="_blank">Corrupted Virtues</a>
                                  </li>

                                  <li class="dropdown relative">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white rounded">Game Jam</button>
                                    <ul class="dropdown-content menu bg-blue-200 rounded shadow-lg absolute mt-2 w-48 z-10">
                                      <li><a href="https://moralsupportstudios.itch.io/babymode" target="_blank">BabyMode</a></li>
                                      <li><a>Item 2</a></li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a class=" bg-blue-500 hover:bg-blue-700 text-white rounded">Coming Soon</a>
                                  </li>
                                </ul>
                              </div>
                              <div class="navbar-end">
                              </div>
                            </div>
                           </div>
                   <br />
                   <Footer />
                           </>
                       );

    };

export default GameDev;