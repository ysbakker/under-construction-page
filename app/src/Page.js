import React from "react";
import Logo from "./logo.png";

const Page = () => {
  return (
    <main className="container">
      <section>
        <img className="logo" src={Logo} alt="logo" />
      </section>

      <section>
        <h1>Coming soon...</h1>
      </section>
      <section className="grey">
        <p>
          This website is currently being worked on. Check back later or check
          us out through the links below!
        </p>
      </section>
      <section className="links"></section>
      <section>
        <p>{new Date().getFullYear()} &copy; Vectoric</p>
      </section>
    </main>
  );
};

export default Page;
