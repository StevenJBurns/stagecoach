import React from "react";
import BarbedWire from "../../../assets/images/barbed-wire.jpg";
import './PageHome.scss';

const PageHome = () => (
  <div className="main-home">
    <div id="div-home-banner-wrapper">
      <section>
        <h3>Welcome to Stagecoach Meat Co.</h3>
      </section>
      <div id="div-corn-field-image" />
    </div>
    <h4>Custom Processing &bull; Retail Shop</h4>
    <img id="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>
    <p>Stagecoach Meat Company, LLC is a family-owned and operated custom processing and retail meat sales company, located in Wiggins, Colorado. Although the company opened for business in March 2006, the owner and manager of the company has over 30 years of experience in the meat business. Our processing plant in Wiggins also includes a retail store with a full line of high quality, USDA-inspected beef and pork products.</p>
    <p>The founder, Ray Von Loh, his wife Judy, children, and a host of dedicated employees oversee day-to-day operations. Our number one goal is customer satisfaction, quality products, and service.</p>
  </div>
);

export default PageHome;
