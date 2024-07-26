import React from "react";

export default function About() {
  return (
    <section className="about px-4 my-5" id="about">
    <div className="container">
      <div className="section-top_text mb-4 text-center">
        <p className="first">About</p>
        <h2 className="main-title py-2">Learn More <span>About Us</span></h2>
        <p className="text fw-bold w-50 mx-auto">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-md-6 column_at">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-styled">
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit
              </li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-md-6 column_at">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <button className="btn">
              <a href="# ">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
