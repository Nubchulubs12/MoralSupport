import react from "react";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar =()=> {
    return(
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
        )}

    export default NavBar;