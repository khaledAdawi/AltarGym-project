import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/login/Login";
import { getUser, logout } from "../../utils/auth";

export default function Navbar() {
    const [showLogin, setShowLogin] = useState(false);
    const user = getUser();

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
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        
                        {user?.role === "customer" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        )}

                        
                        {user?.role === "admin" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/inventory">Inventory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/purchases">Purchases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/analytics">Analytics</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="d-flex align-items-center gap-2">
                        
                        {!user && (
                            <>
                                <button
                                    className="btn btn-dark"
                                    onClick={() => setShowLogin(true)}
                                >
                                    Login
                                </button>

                                <Link className="btn btn-warning" to="/register">
                                    <i className="bi bi-person-plus-fill"></i>
                                </Link>
                            </>
                        )}


                        {user && (
                            <>
                                <span className="text-white me-2">
                                    Hi, {user.name}
                                </span>
                                <button className="btn btn-danger" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        )}
                    </div>


                    <Login
                        show={showLogin}
                        onClose={() => setShowLogin(false)}
                    />
                </div>
            </div>
        </nav>
    );
}
