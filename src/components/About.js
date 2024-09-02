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
                  <span className="animated-item">Full-Stack Dev</span>
                  <span className="animated-item">Coder</span>
                </div>
              </h1>

              <p>
              I am a skilled Software Engineer with hands-on experience in full-stack development, Generative AI, and quality assurance. I bring a combination of technical skills and a passion for solving problems with effective communication. My ability to adapt allows me to succeed in projects and commitment to continuous learning ensures that I stay aligned to the new industry trends.
              </p>

              <div className="custom-btn-group mt-4">
                <a
                  href="https://drive.google.com/file/d/1oWn1rIA4zd4q5hSSGaG8HGTTqbIQz-Qw/view?usp=sharing"
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
                  <a
                    href="https://www.linkedin.com/in/yash-bharambay-9873b220a/"
                    target="blank"
                  >
                    {/* <img src="https://img.icons8.com/nolan/30/linkedin.png" /> */}
                    <img src="https://img.icons8.com/color/30/000000/linkedin.png" />
                    {/* <img src="https://img.icons8.com/dotty/30/000000/linkedin.png" /> */}
                  </a>
                  <a href="https://github.com/YashBharambay" target="blank">
                    <img src="https://img.icons8.com/color/30/github--v3.png" />
                    {/* <img src="https://img.icons8.com/plasticine/30/000000/github.png" /> */}
                  </a>
                  <a href="https://twitter.com/YBharambay" target="blank">
                    <img src="https://img.icons8.com/fluency/30/000000/twitter.png" />
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
