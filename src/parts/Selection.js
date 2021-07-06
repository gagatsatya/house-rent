import React from "react";
import House1 from "assets/images/selection1.png";
import House2 from "assets/images/selection2.png";
import House3 from "assets/images/selection3.png";
import House4 from "assets/images/selection4.png";
import Badges from "assets/images/icons/badge.svg";
import Star from "assets/images/icons/star.svg";

export default function Selection() {
  const selection = [
    {
      image: "images/selection1.png",
      rating: 4.5,
      location: "Lembang, Bandung",
      price: "$850K",
    },
    {
      image: "images/selection2.png ",
      rating: 4.8,
      location: "Angga Center, Jakarta",
      price: "$999K",
    },
    {
      image: "images/selection3.png ",
      rating: 5,
      location: "Ahya, France",
      price: "$1250K",
    },
    {
      image: "images/selection4.png ",
      rating: 4.2,
      location: "Koko, Jamaica",
      price: "$450K",
    },
  ];

  return (
    <section className="selection">
      <div className="container">
        <div
          className="row justify-content-center text-center"
          style={{ marginTop: "100px" }}
        >
          <div className="col-auto">
            <h2>Most People Go</h2>
            <p className="mt-4 mb-5">
              From nature to heart and becomes <br />
              all what we need to have
            </p>
          </div>
        </div>
        <div className="row mt-3">
          {selection.map((item, index) => {
            return (
              <div className="col-3">
                <div
                  className="wrapper position-relative"
                  style={{ height: 250, width: 250 }}
                  key={index}
                >
                  <img
                    className="image position-absolute"
                    src={item.image}
                    alt="img"
                    width="250"
                    height="250"
                  />
                  <img
                    className="star position-absolute"
                    src={Star}
                    alt="img"
                  />
                  <img
                    className="badges position-absolute"
                    src={Badges}
                    alt="img"
                  />
                  <div className="rating position-absolute">
                    <p>{item.rating}</p>
                  </div>
                </div>
                <h3>{item.location}</h3>
                <p>Start from {item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
