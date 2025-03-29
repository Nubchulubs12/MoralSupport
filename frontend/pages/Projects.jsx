import badge from "../src/assets/badge.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Projects() {



return (
                    <>
                     <div className="min-h-screen flex flex-col">
                        <NavBar />
                    <div className="hero bg-blue-200 min-h-auto">
                      <div className="hero-content text-center">
                        <div className="max-w-md">

                          <h1 className="text-5xl font-bold">Projects</h1>
                          <p className="py-6">
                            Here is where all of our projects are and can see details about them.
                          </p>
                        </div>
                      </div>
                    </div>
                <br />
                   <div class="flex flex-col justify-center items-center h-24">
                     <br />
                     <a class="btn btn-grey text-xl">Coming Soon</a>
                   </div>
                   </div>
            <br />
            <Footer />
                    </>
                );
            };



export default Projects;