import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/tonidevvn" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/thangpham-1988-vn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="mt-4 text-gray-400 ">
        A portfolio designed & built by{" "}
        <a
          href="https://github.com/tonidevvn/blog"
          target="_blank"
          rel="noreferrer"
          className="text-gray-200 hover:text-gray-300 transition-all duration-300"
        >
          Toni Pham
        </a>{" "}
        with ☕
      </p>
    </footer>
  );
}

export default Footer;
