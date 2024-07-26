import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact my-5">
      <div className="container">
        <div className="section-top_text mb-4 text-center">
          <p className="first">CONTACT</p>
          <h2 className="main-title py-2">
            Contact <span>Us</span>
          </h2>
          <p className="text fw-bold w-50 mx-auto">
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <div className="content">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.693112831745!2d31.021464624566175!3d30.55797347466912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d7223ff2d63f%3A0x9d531b61c0ebb81b!2sITI%20Menofia%20Branch!5e0!3m2!1sar!2seg!4v1721683702136!5m2!1sar!2seg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="row my-5">
            <div className="col-md-4 my-3">
              <div className="column_ct text">
                <div className="row_ct my-2 d-flex align-items-center justify-content-start">
                  <div className="icon me-3">
                    <i className="fa-solid fa-location-dot fs-3"></i>
                  </div>
                  <div className="description">
                    <h4 className="title">Location:</h4>
                    <p className="addition">ITI Menofia Branch</p>
                  </div>
                </div>
                <div className="row_ct my-2 d-flex align-items-center justify-content-start">
                  <div className="icon me-3">
                    <i className="fa-solid fa-envelope fs-3"></i>
                  </div>
                  <div className="description">
                    <h4 className="title">Email:</h4>
                    <p className="addition">info@example.com</p>
                  </div>
                </div>
                <div className="row_ct my-2 d-flex align-items-center justify-content-start">
                  <div className="icon me-3">
                    <i className="fas fa-mobile fs-3"></i>
                  </div>
                  <div className="description">
                    <h4 className="title">Call:</h4>
                    <p className="addition">ITI Menofia Branch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 my-3">
              <div className="column_ct text-center">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
                <div className="form-floating my-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">Comments</label>
                </div>
                <button className="btn mx-auto">
                  <a href="# ">Send Message</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
