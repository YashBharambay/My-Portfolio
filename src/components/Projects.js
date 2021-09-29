import React from "react";
import First from "../images/project/project-image01-1.png";
import Second from "../images/project/project-image02.png";
import Third from "../images/project/project-image03-1.png";
import Fourth from "../images/project/project-image04.png";
import Five from "../images/project/project-image05.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Projects I have developed ...</h2>
            </div>
            <OwlCarousel
              className="owl-theme"
              items={1}
              loop
              margin={10}
              nav
              center={true}
              autoplay={true}
              autoplayTimeout={3500}
            >
              <div className="item">
                <div className="project-info">
                  <a href="https://disney-clone-e7eec.web.app/" target="blank">
                    <img
                      src={Second}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="project-info">
                  <a href="https://mangeshkusurkar.vercel.app/" target="blank">
                    <img
                      src={First}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <a
                    href="https://github.com/YashBharambay/Crypto_Tracker"
                    target="blank"
                  >
                    <img
                      src={Third}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
              </div>

              {/* <div className="item">
                <div className="project-info">
                  <img src={Fourth} className="img-fluid" alt="project image" />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <img src={Five} className="img-fluid" alt="project image" />
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
