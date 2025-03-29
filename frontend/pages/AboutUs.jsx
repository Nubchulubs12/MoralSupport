import badge from "../src/assets/badge.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function AboutUs() {

     return (
            <>
             <div className="min-h-screen flex flex-col">
                         <NavBar />
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
   <Footer />
            </>
        );
    }


export default AboutUs;