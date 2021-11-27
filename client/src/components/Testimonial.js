import React, { useEffect, useState } from "react";
import axios from "axios";
import logo1 from "../images/logo_01.png";
import logo2 from "../images/logo_02.png";
import logo3 from "../images/logo_03.png";
import logo4 from "../images/logo_04.png";

import Carousel from "react-grid-carousel";

const Testimonial = () => {
  const [first, setFirst] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://firstapi2021.herokuapp.com");
    setFirst(res.data.firstapiAlldata);
  }, []);
  return (
    <div>
      <section id="testimonial" class="testimonial-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center pb-10">
                <h4 class="title">Testimonial</h4>
                <p class="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <Carousel
            autoplay="300"
            showDots
            hideArrow
            cols={3}
            containerStyle={{ maxWidth: "1300px", margin: "0 auto" }}
          >
            {first &&
              first.map((f) => {
                return (
                  <Carousel.Item>
                    <div class="single-testimonial mt-30 mb-30 text-center">
                      <div class="testimonial-image">
                        <img width="100%" src={f.photo} />
                      </div>
                      <div class="testimonial-content">
                        <p class="text">{f.testimonialdescription}</p>
                        <h6 class="author-name">{f.name}</h6>
                        <span class="sub-title">{f.post}</span>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </section>
      <section class="client-logo-area">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-6">
              <div class="single-client mt-30 text-center">
                <img src={logo1} alt="Logo" />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client mt-30 text-center">
                <img src={logo2} alt="Logo" />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client mt-30 text-center">
                <img src={logo3} alt="Logo" />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client mt-30 text-center">
                <img src={logo4} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
