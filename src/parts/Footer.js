import React from "react";
import Logo from "assets/images/icons/logo.svg";
import Loc from "assets/images/icons/loc.svg";
import Phone from "assets/images/icons/phone.svg";
import Email from "assets/images/icons/email.svg";
import Twitter from "assets/images/icons/twitter.svg";
import Instagram from "assets/images/icons/instagram.svg";
import Facebook from "assets/images/icons/facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="left col">
            <div className="wrap mb-3">
              <a className="navbar-brand position-relative" href="#">
                <img
                  src={Logo}
                  alt="img"
                  style={{ height: "35", width: "35" }}
                />
                <h1 className="text-logo position-absolute">
                  Lent<span className="clr-black">era</span>
                </h1>
              </a>
            </div>
            <div>
              <img src={Loc} alt="img" />
              <p>Street 21 street</p>
            </div>
            <div>
              <img src={Phone} alt="img" />
              <p>+12 6298559 66</p>
            </div>
            <img src={Email} alt="img" />
            <p>Email@email.com</p>
          </div>
          <div className="col-6"></div>
          <div className="col-3 text-end">
            <img className="sosmed" src={Twitter} alt="img" />
            <img className="sosmed" src={Facebook} alt="img" />
            <img className="sosmed" src={Instagram} alt="img" />
            <p>Join Us</p>
            <br />
            <p>Be Our Guest</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p> © All Right Reserved - Lentera 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
