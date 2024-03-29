import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    toast.success("Your response is submitted successfully");
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
      // toast.success("Successfully toasted!");
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };
  // const notify = () => toast.success("Successfully toasted!");
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.781902227706!2d-74.02822342358527!3d40.74482433560505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259deeb426a4d%3A0x52b7295ea9b98396!2sStevens%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1708643062929!5m2!1sen!2sus"
                width="400"
                height="300"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Say hello</h3>
                <p className="footer-text mb-0">+1 (862)800-1180</p>
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
                  {/* <a
                    href="https://www.instagram.com/yash_bharambay_/"
                    target="blank"
                  >
                    <img src="https://img.icons8.com/color-glass/30/000000/instagram-new.png" />
                  </a> */}
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
                <li>
                  <a href="https://github.com/YashBharambay" target="blank">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
                    {/* <img src="https://img.icons8.com/plasticine/30/000000/github.png" /> */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/YBharambay" target="blank">
                    <img src="https://img.icons8.com/fluency/30/000000/twitter.png" />
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
                    {/* <button onClick={notify}>Make me a toast</button>s */}
                    <Toaster />
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
