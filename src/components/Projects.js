import React from "react";
import First from "../images/project/DISNEY.png";
import Second from "../images/project/mk.png";
import Third from "../images/project/gallery.png";
import Fourth from "../images/project/crypto.png";
// import Five from "../images/project/project-image05.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
    return (
        <section className="project py-5" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 text-center mx-auto  col-12">
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
                            <div className="item  rounded mx-5 my-5 ">
                                <div className="project-info ">
                                    <div className="head d-flex align-items-center">
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 red"></div>
                                        <div className=" rounded-circle  yellow"></div>
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 green"></div>
                                    </div>
                                    <a
                                        href="https://disney-clone-e7eec.web.app/"
                                        target="blank"
                                    >
                                        <img
                                            src={First}
                                            className="img-fluid"
                                            alt="projectimage"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="item  rounded mx-5 my-5">
                                <div className="project-info ">
                                    <div className="head d-flex align-items-center">
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 red"></div>
                                        <div className=" rounded-circle  yellow"></div>
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 green"></div>
                                    </div>
                                    <a
                                        href="https://mangeshkusurkar.vercel.app/"
                                        target="blank"
                                    >
                                        <img
                                            src={Second}
                                            className="img-fluid"
                                            alt="projectimage"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="item  rounded mx-5 my-5">
                                <div className="project-info ">
                                    <div className="head d-flex align-items-center">
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 red"></div>
                                        <div className=" rounded-circle  yellow"></div>
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 green"></div>
                                    </div>
                                    <a
                                        href="https://github.com/YashBharambay/gallery-app"
                                        target="blank"
                                    >
                                        <img
                                            src={Third}
                                            className="img-fluid"
                                            alt="projectimage"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="item  rounded mx-5 my-5">
                                <div className="project-info ">
                                    <div className="head d-flex align-items-center">
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 red"></div>
                                        <div className=" rounded-circle  yellow"></div>
                                        <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 green"></div>
                                    </div>
                                    <a
                                        href="https://github.com/YashBharambay/crypto-tracker"
                                        target="blank"
                                    >
                                        <img
                                            src={Fourth}
                                            className="img-fluid"
                                            alt="projectimage"
                                        />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
