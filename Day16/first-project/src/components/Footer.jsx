import React from 'react'

export default function Footer() {
  return (
    <footer className="footer mt-4 py-5 shadow">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="column_foo">
            <h5 className="fw-bold">BoostCreat</h5>
            <p className="my-3">
              ITI Menofia Branch <br />
              ITI Menofia Branch <br />
              Menofia <br />
            </p>
            <p className="my-2">
              <b>Phone:</b> +1 5589 55488 55 <br />
              <b>Email:</b> info@example.com
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="column_foo">
            <h5 className="fw-bold">Useful link</h5>
            <ul className="my-3">
              <li className="my-2">
                <a href="# ">Home</a>
              </li>
              <li className="my-2">
                <a href="# ">About us</a>
              </li>
              <li className="my-2">
                <a href="# ">Services</a>
              </li>
              <li className="my-2">
                <a href="# ">Terms of service</a>
              </li>
              <li className="my-2">
                <a href="# ">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="column_foo">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="my-3">
              <li className="my-2">
                <a href="# ">Web Design</a>
              </li>
              <li className="my-2">
                <a href="# ">Web Development</a>
              </li>
              <li className="my-2">
                <a href="# ">Product Management</a>
              </li>
              <li className="my-2">
                <a href="# ">Marketing</a>
              </li>
              <li className="my-2">
                <a href="# ">Graphic Design</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="column_foo">
            <h5 className="fw-bold">Join Our Newsletter</h5>
            <p className="my-3">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-danger" type="button" id="button-addon2">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
