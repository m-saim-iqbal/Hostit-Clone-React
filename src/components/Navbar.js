import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-4">
            <div className="container-fluid">
                <p className="navbar-brand"  >HOSTIT</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-items mb-2 mb-lg-0 mx-xxl-5 header-list style=" >
                        <li className="nav-item">
                            <p className="nav-link" aria-current="page" >HOME</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >ABOUT</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" aria-current="page" >SERVICES</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >PRICING</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >CONTACT US</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">CALL : +01 123455678990</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}