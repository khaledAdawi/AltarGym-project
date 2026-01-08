import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">


                <Link className="navbar-brand" to="/">
                    Altra Gym
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/productManagement">Products</Link>
                        </li>

                    </ul>

                    
                    <div className="d-flex align-items-center">

                        <Link className="btn btn-outline-light me-2" to="/login">
                            Login
                        </Link>

                        
                        <Link className="btn btn-warning" to="/register">
                            <i className="bi bi-person-plus-fill"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}
