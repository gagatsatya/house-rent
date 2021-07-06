import React from "react";
import Google from "assets/images/google-play.png";
import Apple from "assets/images/app-store.png";
import Testi1 from "assets/images/testimoni1.png";
import Box from "assets/images/testi-box.png";

export default function Testimoni() {
  const Testi = [
    {
      image: "images/testimoni1.png",
      name: "Sabrina Kuku",
      comment: "My new family ever and thanks to Lentera",
    },
    {
      image: "images/testimoni2.png",
      name: "Just Thin",
      comment: "Now I can make a true real passive income from houses",
    },
    {
      image: "images/testimoni3.png",
      name: "Chin Kya",
      comment: "The way I rent was so faaast and can’t belive it, thanks",
    },
  ];

  return (
    <section className="testimoni">
      <div className="container">
        <div className="row">
          <div className="col-4 align-self-center">
            <h2 className="mb-3">
              Become a part <br /> of our community
            </h2>
            <p className="mb-3">
              Grow and live together to pursue <br /> happiness that we always
              dreaming of
            </p>
            <div className="row">
              <div className="col">
                <img src={Google} alt="img" height="40" width="122" />
              </div>
              <div className="col">
                <img src={Apple} alt="img" height="40" width="122" />
              </div>
            </div>
          </div>
          {Testi.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="wrapper position-relative">
                  <img
                    className="position-absolute"
                    src={item.image}
                    alt="img"
                    width="180"
                    height="236"
                  />
                  <img
                    className="box position-absolute"
                    src={Box}
                    alt="img"
                    width="180"
                    height="86"
                  />
                  <div className="text position-absolute">
                    <h4>{item.name}</h4>
                    <p>{item.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
