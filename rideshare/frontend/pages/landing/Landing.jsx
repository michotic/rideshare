import React from "react";
import "./landing.css";
import { Navbar } from "../../components";
import redbullf1 from "../../assets/1 Red Bull F1.jpeg";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="landing__page">
        <div className="landing__navbar">
          <div className="landing__navbar-links"></div>
          <div className="landing__main">
            <div className="landing__main-square">
              <h2>Choose rides at great prices today!</h2>
              {/* scalable vector graphics tag, used to make line within the box  */}
              <svg viewBox="0 0 100 100" width="150" height="220">
                <line
                  x1="200"
                  y1="100"
                  x2="20"
                  y2="100"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
              <p>
                Say goodbye to overpriced rides and book today! We offer
                affordable fares for students and an array of reliable drivers
                for you to choose from.
              </p>
              <a href="/rides">
                <p id="rides">Browse rides</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
