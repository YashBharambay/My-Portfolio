import React from "react";
import First from "../images/project/DISNEY.png";
import Second from "../images/project/mk.png";
import Third from "../images/project/multipdf_assist.png";
import Fourth from "../images/project/crypto.png";
import Mario from "../images/project/mario.jpeg"
import Subsplit from "../images/project/subsplit2.png";
import EOLC from "../images/project/endoflifecare.png"
import Apartment from "../images/project/apartmentListing.png"
import Potter from "../images/project/potter_gpt.png"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

  const Project = ({ name, description, imageSrc, link }) => (
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
      <div className="project-info d-flex flex-column justify-content-between" style={{ height: "100%" }}>
        <div>
          <div className="head d-flex align-items-center">
            <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 red"></div>
            <div className=" rounded-circle  yellow"></div>
            <div className=" rounded-circle mx-1 mx-lg-2 mx-md-2 mx-sm-1 green"></div>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} className="img-fluid" alt="projectimage" style={{ width: "100%", height: "auto" }} />
            <div className="project-name">{name}</div>
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
  

const Projects = () => {
  const projectData = [
    {
      name: "Harry Potter GPT",
      description: "Harry Potter GPT is an interactive conversational AI model trained on the Harry Potter book series, allowing users to engage in dialogue and generate text in the style of characters from the wizarding world",
      imageSrc: Potter,
      link: "https://github.com/YashBharambay/Harry_Potter_GPT",
    },
    {
      name: "Movie Streaming Website",
      description: "Recreated a popular entertainment platform replica with advanced web technologies such as MERN",
      imageSrc: First,
      link: "https://disney-clone-e7eec.web.app/",
    },
    {
        name: "MultiPDF Assist Gen Ai",
        description:
          "LLM Powered your own AI Assistant using LangChain and OPEN_AI/LLAMA models",
        imageSrc: Third,
        link: "https://github.com/YashBharambay/MultiPDF-Assist-App",
      },
      {
        name: "Mario SQL",
        description:
          "Interactive educational platform inspired by Super Mario for learning SQL queries in a gamified environment.",
        imageSrc: Mario,
        link: "https://github.com/YashBharambay/cs545-mario-sql",
      },
      {
        name: "Apartment Rental",
        description:
          "MERN stack application enabling seamless listing, searching, and application for rental apartments using Redis search",
        imageSrc: Apartment,
        link: "https://github.com/YashBharambay/cs554-try-cache-final-project",
      },
      {
        name: "Subsplit Subscription",
        description:
          "Web App designed to streamline subscription sharing, facilitating group management and simultaneous access",
        imageSrc: Subsplit,
        link: "https://github.com/YashBharambay/Subsplit_Subscription",
      },
      {
        name: "Enriching Technology in End-of-life care",
        description:
          "Web App which uses ML model to predict cardio-vascular disorders of patients thus decreasing workload on doctors.",
        imageSrc: EOLC,
        link: "https://github.com/YashBharambay/team-23-agile-avengers",
      },
    {
      name: "Lawyer Portfolio",
      description: "Lawyer Portfolio Website",
      imageSrc: Second,
      link: "https://mangeshkusurkar.vercel.app/",
    },
    
    {
      name: "Crypto Tracker",
      description: "Track real-time cryptocurrencies and their values.",
      imageSrc: Fourth,
      link: "https://github.com/YashBharambay/crypto-tracker",
    },
    // Add more projects here as needed
  ];

  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto  col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Projects I have developed ...</h2>
              <p>
                If you want to see some of my amazing projects visit my{" "}
                <a href="https://github.com/YashBharambay" target="_blank" rel="noopener noreferrer">
                  github
                  <img src="https://img.icons8.com/color/30/github--v3.png" alt="Github logo" />
                </a>
                <br />
                Click on the projects below to visit to source code
              </p>
            </div>
            {/* <OwlCarousel
              className="owl-theme"
              items={1}
              loop
              margin={10}
              nav
              center={true}
            //   autoplay={true}
            //   autoplayTimeout={3500}
            >
              {projectData.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </OwlCarousel> */}

            <div className="row">
              {projectData.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
