import badge from "../src/assets/badge.png";
import cv from "../src/assets/cv.png";
import babyMode from "../src/assets/babyMode.png"
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar"
import LeftHandText from "./LeftHandText";
function Home() {
const navigate = useNavigate();



    return (
        <>
        <div className="min-h-screen flex flex-col">
             <NavBar />
        <div className="hero bg-blue-200 min-h-auto">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">TheSchlote</h1>
              <p className="py-6">
                This site is to show off my skills and the journey im on to build games.
              </p>
            </div>
          </div>
        </div>
<LeftHandText />
</div>
<br />
<Footer />
        </>
    );
    }

export default Home;