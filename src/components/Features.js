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
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>React Developer Intern</span>
                    <br/>
                    <small>Curato</small>
                  </h3>
                  <p>
                    Done work in both Frontend as well as Backend.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2021</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Software Developer Intern </span>
                    <small>LazyTech Info Solutions Pvt Ltd.</small>
                  </h3>
                  <p>A great place to work !</p>
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
                  <span>2021</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Self-taught Developer</span>
                    {/* <small>New Art School</small> */}
                  </h3>
                  <p>Mastering and learning new skills .</p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2020</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Web-Development</span>
                    <small>Full-Stack</small>
                  </h3>
                  <p>Started learning frontend & backend by own.</p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2018</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Electronics Engineering</span>
                    {/* <small>Creative Agency</small> */}
                  </h3>
                  <p>
                    Started pursuing four year Electronics enginnering course
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
