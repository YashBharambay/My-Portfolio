import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/pubg/google_sheets/fWXdkclJWVRNzplQ?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.631218915403!2d73.08983221490698!3d19.211303152697766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79588e642fc83%3A0x54c406eb85a683b7!2sLaxman%20Smruti!5e0!3m2!1sen!2sin!4v1632825932636!5m2!1sen!2sin"
                width="400"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Say hello</h3>
                <p className="footer-text mb-0">+91 7977965617</p>
                <p>
                  <a href="mailto:ybharambay@gmail.com">ybharambay@gmail.com</a>
                </p>
              </div>

              <ul className="social-links">
                <li>
                  {/* <a
                    href="https://www.instagram.com/yash_bharambay_/"
                    className="uil uil-instagram"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Instagram"
                    target="blank"
                  ></a> */}
                  <a
                    href="https://www.instagram.com/yash_bharambay_/"
                    target="blank"
                  >
                    {/* <img src="https://img.icons8.com/nolan/30/instagram-new.png" /> */}
                    {/* <img src="https://img.icons8.com/cotton/30/000000/instagram-new.png" /> */}
                    <img src="https://img.icons8.com/color-glass/30/000000/instagram-new.png" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yash-bharambay-9873b220a/"
                    target="blank"
                  >
                    {/* <img src="https://img.icons8.com/nolan/30/linkedin.png" /> */}
                    <img src="https://img.icons8.com/color/30/000000/linkedin.png" />
                    {/* <img src="https://img.icons8.com/dotty/30/000000/linkedin.png" /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">
                Interested to work together? Let&#39;s talk
              </h2>

              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      value={message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input
                      type="submit"
                      className="form-control submit-btn"
                      value="Send Button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
