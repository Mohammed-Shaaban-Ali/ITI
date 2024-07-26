import React from "react";

function Home() {
  return (
    <section id="home" className="intro">
      <div className="content text-center text-light">
        <p className="top-text fs-3 px-5 py-2 mb-3 rounded">
          Welcome to <span>BoostCreat</span>
        </p>
        <h1 className="main-heading fw-bold">WE'RE CREATIVE AGENCY</h1>
        <p className="support-par">
          We are a team of talented designers making websites with Bootstrap
        </p>
        <button className="btn mt-3">
          <a href="#about">Get Started</a>
        </button>
      </div>
    </section>
  );
}

export default Home;
