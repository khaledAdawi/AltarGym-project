import React from "react";

// images
import quality1 from "../../assets/images/about/Quality/quality1.jpg";
import quality2 from "../../assets/images/about/Quality/quality2.jpg";
import quality3 from "../../assets/images/about/Quality/quality3.jpg";

import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";
import runningImg from "../../assets/images/about/running.jpg";


import "./about.css";

export default function About() {
  return (
    <>

      <section className="about-hero">
        <h1>ABOUT US</h1>
      </section>


      <section className="commitment-section">
        <h2>COMMITMENT TO QUALITY</h2>
        <p className="subtitle">
          We believe you get out what you put in —
          <br />
          that’s why our products are made with the highest standards of quality.
        </p>

        <div className="quality-grid">
          <div className="quality-box">
            <img src={quality1} alt="Factory" />
            <h3>HIGH QUALITY RAW MATERIALS</h3>
            <p>
              Before a single machine is turned on, we carefully select premium
              raw materials.
            </p>
          </div>

          <div className="quality-box">
            <img src={quality2} alt="Protein Powder" />
            <h3>STATE-OF-THE-ART MANUFACTURING</h3>
            <p>
              For 30+ years we’ve taken a hands-on approach to maintaining the
              highest standards.
            </p>
          </div>

          <div className="quality-box">
            <img src={quality3} alt="Lab" />
            <h3>WE TEST & RE-TEST FOR QUALITY</h3>
            <p>
              Test every step along the way. Because we care about what goes into
              our products.
            </p>
          </div>
        </div>
      </section>

      <section
        className="stats-section stats-with-bg"
        style={{ backgroundImage: `url(${runningImg})` }}
      >
        <div className="stats-overlay">
          <div className="stat-box">
            <h2>15</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="stat-box">
            <h2>20</h2>
            <p>CERTIFIED SPECIALIST</p>
          </div>
          <div className="stat-box">
            <h2>69K</h2>
            <p>INCLUDED GIFTS</p>
          </div>
          <div className="stat-box">
            <h2>250K</h2>
            <p>HAPPY MEMBERS</p>
          </div>
        </div>
      </section>
      
      <section className="partners-section">
        <div className="partner-logos">
          <img src={brand1} alt="Brand" />
          <img src={brand2} alt="Brand" />
          <img src={brand3} alt="Brand" />
          <img src={brand4} alt="Brand" />
          <img src={brand5} alt="Brand" />
        </div>
      </section>
    </>
  );
}
