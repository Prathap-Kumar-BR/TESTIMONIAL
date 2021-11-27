import React, { useState } from "react";
import logo from "../images/logo.svg";
import headerbg from "../images/header-shape.svg";
import "../style.css";

const Header = () => {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div>
      <header class="header-area">
        <div
          className={
            navColour
              ? "navgition navgition-transparent sticky"
              : "navgition navgition-transparent"
          }
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                  </a>
                  <button
                    class="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarOne"
                    aria-controls="navbarOne"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="navbar-collapse sub-menu-bar collapse"
                    id="navbarOne"
                  >
                    <ul class="navbar-nav m-auto">
                      <li class="nav-item active">
                        <a class="page-scroll" href="#home">
                          HOME
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#service">
                          SERVICES
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#pricing">
                          PRICING
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#testimonial">
                          Testimonial
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-social d-none d-sm-flex align-items-center">
                    <span>FOLLOW US</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-instagram-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div id="home" class="header-hero bg_cover">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10">
                <div class="header-content text-center">
                  <h3 class="header-title">
                    Handcrafted Landing Page for Startups and SaaS Businesses
                  </h3>
                  <p class="text">
                    A simple, customizable, and, beautiful SaaS business focused
                    landing page to make your project closer to launch!
                  </p>
                  <ul class="header-btn rounded-buttons">
                    <li>
                      <a class="main-btn rounded-three" href="#">
                        GET IN TOUCH
                      </a>
                    </li>
                    <li>
                      <a class="main-btn rounded-four video-popup" href="#">
                        WATCH THE VIDEO <i class="lni-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-shape">
            <img src={headerbg} alt="shape" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
