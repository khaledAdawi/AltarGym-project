import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center p-3 mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
                        <p>Email: Gymex@domain.com</p>
                        <p>Phone: (+49) 818703 2412</p>
                        <div className="social-icons mt-3">
                            <i class="fa-brands fa-tiktok me-2"></i>
                            <i class="fa-brands fa-twitter me-2"></i>
                            <i class="fa-brands fa-instagram me-2"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <h5 className="fw-bold">Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Start a Return</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Jobs</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5 className="fw-bold">About</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Career</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Corporate Governance</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5">
                        <h5 className="fw-bold">Get the latest news sent right to your inbox!</h5>
                        <p>See our latest collections & exclusive offers before the crowd!</p>
                        <form className="d-flex">
                            <input type="email" placeholder="Your email..." className="form-control me-2"/>
                                <button className="btn text-uppercase fw-bold Subscribe">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center py-3 border-top small">
                © <span className="text-warning">Altra</span> – All Rights Reserved.
            </div>
        </footer>
    )
}
