import React from "react";
// import Image from "../images/undraw/blogging.svg";
import Lottie from "react-lottie";
import animationData from "../lotties/code.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              {/* <small className="small-text">
                Welcome to{" "}
                <span className="mobile-block">my portfolio website!</span>
              </small> */}
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks,I&#39;m</span>
                <div className="animated-info">
                  <span className="animated-item">Yash Bharambay</span>
                  <span className="animated-item">Web Developer</span>
                  <span className="animated-item">Coder</span>
                </div>
              </h1>

              <p>
                Building a successful product is a challenge. I am highly
                energetic in user experience design, interfaces and web
                development.
              </p>

              <div className="custom-btn-group mt-4">
                <a
                  href="https://yash12.notion.site/Yash-D-Bharambay-7ddaa488bf2746b0bb19191c3c8e24cf"
                  className="btn mr-lg-2 custom-btn"
                  target="_blank"
                >
                  <i className="uil uil-file-alt"></i> View Resume
                </a>
                <a
                  href="#contact"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Get a free quote
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            {/* <div className="about-image svg">
                  <img src={Image} className="img-fluid" alt="svg image" />
                </div> */}
            <div className="lottie">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
