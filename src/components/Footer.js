import { width } from "dom-helpers";
import React from "react";
// import Code from "../Code.svg";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            {/* <p className="copyright-text text-center">Copyright &copy; 2019 Company Name . All rights reserved</p> */}

            <p className="copyright-text text-center footer-text">
              <img
                className="editor"
                // src="https://img.icons8.com/material-two-tone/24/000000/source-code.png"
                src="https://img.icons8.com/color/26/000000/source-code.png"
              />{" "}
              with{" "}
              <img src="https://img.icons8.com/nolan/26/react-native.png" />
              <br />
              by{" "}
              <a
                href="https://www.linkedin.com/in/yash-bharambay-9873b220a/"
                target="_blank"
              >
                Yash Bharambay
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
