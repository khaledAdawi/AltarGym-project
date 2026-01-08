import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      
      <section className="contact-header">
        <div className="overlay">
          <h1>CONTACT</h1>
          <p>Home &gt; Contact</p>
        </div>
      </section>

      
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19805.386195849643!2d-0.1391368580256204!3d51.50986514402011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb97f647e17%3A0x1f4d47d46c8ce6f2!2sLondon!5e0!3m2!1sen!2suk!4v1691269967724!5m2!1sen!2suk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        />
      </section>

      
      <section className="contact-section">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8 form-area">
              <h2>GET IN TOUCH</h2>
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <textarea
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Comment or Message *"
                  required
                />

                <button type="submit" className="btn btn-warning fw-bold px-4">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            
            <div className="col-lg-4 contact-info">
              <h4>ADDRESS</h4>
              <p>14 LE Gounlburn St, Sydney 1198NSA.</p>

              <h4>PHONE</h4>
              <p>(+089) 19918989</p>

              <h4>EMAIL</h4>
              <p>support@gymex.com</p>

              <h4>OPENING TIME</h4>
              <p>8:00Am – 10:00Pm, Sunday Close</p>

              <h4>FOLLOW US ON</h4>
              <div className="social-icons">
                <i className="fab fa-tiktok me-2"></i>
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-facebook-f"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
