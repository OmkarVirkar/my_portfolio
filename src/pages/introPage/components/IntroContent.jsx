import React from "react";
import "../../../styles/introContent.css";
import "../../../styles/common.css";
import myProfileImage from "../../../images/IMG_2350.png";

const IntroContent = () => {
  return (
    <div className="main-container mt-5 dark-grey-background">
      <div className="intro-padding-top">
        <div id="left-side-intro" className="display-inline-block ">
          <div class="name">
            <h1 className="color-white">
              Omkar <br /> Virkar{" "}
              <span className="theme-dot display-inline-block" />
            </h1>
          </div>
          <div class="dash"></div>
          <div class="social-links mb-40">
            <a href="https://www.instagram.com/tortoiz">Instagram</a> |{" "}
            <a href="https://www.linkedin.com/in/shailendra-bhardwaj-4539611a0/">
              LinkedIn
            </a>
            <br />
            <a href="https://behance.net/tortoizthemes">Behance</a> |{" "}
            <a href="https://dribbble.com/TortoizTeam">Dribbble</a>
          </div>
          <div className="contact-me-div">
            <a href="#contact" className="ct-btn">
              Contact me
            </a>
          </div>
        </div>
        <div id="centre-intro-div" className="display-inline-block">
          <img style={{ width: "100%" }} src={myProfileImage} />
        </div>
        <div id="right-intro-div" className="display-inline-block">
          <div class="into-area">
            <div class="section-title">
              <h3 class="section-name pc">INTRODUCTION</h3>
              <h2 className="color-white">
                Full Stack Web <br /> Developer
              </h2>
              <p className="color-white">
                Lorem ipsum dolor sit amet, consectetur adip cing elit, sed do
                eiusmod tempor incidid unt ut labore et dolorepore magna aliqua.
              </p>
            </div>
            <div className="intro-button ">
              <a className="mr-btn pc undeline-pc" href="#skills">
                {" "}
                Learn more &nbsp;{" "}
                <i>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
