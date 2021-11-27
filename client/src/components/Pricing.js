import React from "react";
import baloon from "../images/baloon.svg";
import flower from "../images/flower.svg";
import call from "../images/call-to-action.png";
import FirstImg from "../svg/FirstImg";
import SecondImg from "../svg/SecondImg";
import ThirdImg from "../svg/ThirdImg";

const Pricing = () => {
  return (
    <div>
      <section id="pricing" class="pricing-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center pb-10">
                <h4 class="title">Our Pricing</h4>
                <p class="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-7 col-sm-9">
              <div class="single-pricing mt-40">
                <div class="pricing-header text-center">
                  <h5 class="sub-title">Basic</h5>
                  <span class="price">$ 199</span>
                  <p class="year">per year</p>
                </div>
                <div class="pricing-list">
                  <ul>
                    <li>
                      <i class="lni-check-mark-circle"></i> Carefully crafted
                      components
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Amazing page
                      examples
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Super friendly
                      support team
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Awesome Support
                    </li>
                  </ul>
                </div>
                <div class="pricing-btn text-center">
                  <a class="main-btn" href="#">
                    GET STARTED
                  </a>
                </div>
                <div class="buttom-shape">
                  <FirstImg />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-7 col-sm-9">
              <div class="single-pricing pro mt-40">
                <div class="pricing-baloon">
                  <img src={baloon} alt="baloon" />
                </div>
                <div class="pricing-header">
                  <h5 class="sub-title">Pro</h5>
                  <span class="price">$ 399</span>
                  <p class="year">per year</p>
                </div>
                <div class="pricing-list">
                  <ul>
                    <li>
                      <i class="lni-check-mark-circle"></i> Carefully crafted
                      components
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Amazing page
                      examples
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Super friendly
                      support team
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Awesome Support
                    </li>
                  </ul>
                </div>
                <div class="pricing-btn text-center">
                  <a class="main-btn" href="#">
                    GET STARTED
                  </a>
                </div>
                <div class="buttom-shape">
                  <SecondImg />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-7 col-sm-9">
              <div class="single-pricing enterprise mt-40">
                <div class="pricing-flower">
                  <img src={flower} alt="flower" />
                </div>
                <div class="pricing-header text-right">
                  <h5 class="sub-title">Enterprise</h5>
                  <span class="price">$ 799</span>
                  <p class="year">per year</p>
                </div>
                <div class="pricing-list">
                  <ul>
                    <li>
                      <i class="lni-check-mark-circle"></i> Carefully crafted
                      components
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Amazing page
                      examples
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Super friendly
                      support team
                    </li>
                    <li>
                      <i class="lni-check-mark-circle"></i> Awesome Support
                    </li>
                  </ul>
                </div>
                <div class="pricing-btn text-center">
                  <a class="main-btn" href="#">
                    GET STARTED
                  </a>
                </div>
                <div class="buttom-shape">
                  <ThirdImg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action" class="call-to-action">
        <div class="call-action-image">
          <img src={call} alt="call-to-action" />
        </div>
        <div class="container-fluid">
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <div class="call-action-content text-center">
                <h2 class="call-title">Curious to Learn More? Stay Tuned</h2>
                <p class="text">
                  You let us know whenever you want us to update anything or
                  think something can be optimised.
                </p>
                <div class="call-newsletter">
                  <i class="lni-envelope"></i>
                  <input type="text" placeholder="john@email.com" />
                  <button type="submit">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
