import React from "react";
import Logo from "./logo.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Page = () => {
  return (
    <main className="container">
      <section>
        <img className="logo" src={Logo} alt="logo" />
      </section>
      <section className="accent">
        <h1>Coming soon</h1>
        <p>
          This website is currently being worked on. Check back later or check
          us out through the links below!
        </p>
      </section>
      <section className="links">
        <div className="link">
          <a
            href="https://github.com/ysbakker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="link linkedin">
          <a
            href="https://www.linkedin.com/in/yorrick-bakker-203938173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="link instagram">
          <a
            href="https://www.instagram.com/ysbkk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
      <section className="footer">
        <p>
          <span>V</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
          <span>i</span>
          <span>c</span> &copy; {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
};

export default Page;
