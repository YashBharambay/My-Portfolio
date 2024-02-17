import React from "react";

const Features = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Experiences</h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Software Engineer Intern</span>
                    <br/>
                    <h5>Digitus Labs</h5>
                  </h3>
                  <p>
                  - Researched and selected optimal technologies for website revamp.
                  <br/>
                  - Containerized application using Docker for streamlined deployment.
                  <br/>
                  - Optimized database schema for data integrity and built efficient APIs with Nest JS.
                  <br/>
                  - Conducted thorough automated testing for robust code quality.
                  <br/>
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>React Developer Intern</span>
                    <br/>
                    <small>Curato</small>
                  </h3>
                  <p>
                  - Developed a fully responsive dashboard using NextJS SSR.<br/>
                  - Implemented an efficient tagging system for content organization.<br/>
                  - Deployed a user authentication system with social login and one-time pin verification.<br/>
                  - Worked on frontend and backend tasks.<br/>
                  </p>
                </div>
              </div>

              {/* <div className="timeline-wrapper">
                    <div className="timeline-yr">
                      <span>2016</span>
                    </div>
                    <div className="timeline-info">
                      <h3><span>UI Freelancer</span></h3>
                      <p>Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div> */}

              {/* <div className="timeline-wrapper">
                    <div className="timeline-yr">
                      <span>2014</span>
                    </div>
                    <div className="timeline-info">
                      <h3><span>Junior Designer<small>Crafted Co.</small></span></h3>
                      <p>Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna
                        consequat viverra.</p>
                    </div>
                  </div> */}
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Educations</h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Master's in Computer Science</span>
                    {/* <small>New Art School</small> */}
                  </h3>
                  <p>Stevens Institute of Technology (2022-2024)</p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2018</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Bachelor of Engineering Electronics</span>
                    {/* <small>Creative Agency</small> */}
                  </h3>
                  <p>
                    University of Mumbai (2018-2024)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
