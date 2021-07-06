import React from "react";
import House from "assets/images/hero-banner.png";
import Frame from "assets/images/hero-frame.jpg";
import Partner from "assets/images/partner.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-5 align-self-center">
            <h1 className="mb-4">We have thousand of your dream home</h1>
            <div className="row">
              <div className="col-auto">
                <p>
                  A light that will guide you to find what you’ve been looking
                  for long long time ago
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-auto">
                <h2 className="mb-0">
                  18<span className="clr-blue">K</span>
                </h2>
                <p>apartment</p>
              </div>
              <div className="col-auto">
                <h2 className="mb-0">
                  52<span className="clr-blue">K</span>
                </h2>
                <p>success</p>
              </div>
              <div className="col-auto">
                <h2 className="mb-0">
                  14<span className="clr-blue">K</span>
                </h2>
                <p>transactions</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <p>Location</p>
                <div class="location-box">
                  <p className="clr-black">Sawangan Golf, Padalarang</p>
                </div>
                <a
                  href=""
                  class="btn btn-primary active mt-3"
                  aria-current="page"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div
              className="wrapper position-relative"
              style={{ height: 800, width: 750 }}
            >
              <img
                className="frame position-absolute"
                src={Frame}
                alt="img"
                height="500"
                width="760"
              />
              <img
                className="banner position-absolute"
                src={House}
                alt="img"
                height="813"
                width="757"
              />
            </div>
          </div>
        </div>
        <div className="partner row justify-content-center">
          <div className="col-auto">
            <img src={Partner} alt="img" width="1000" height="45" />
          </div>
        </div>
      </div>
    </section>
  );
}
