import React from 'react'
import clientimage from "../images/client.jpg"

function Testimonial() {
    return (
        <div className='testimonial'>
            <div className="container-fluid">
                <div className="testimonial text-center">
                    <h2>Testimonial</h2>
                    <p>Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="testimonial-image-andbox">
                                    <img src={clientimage} width="120px" className="testimonial-className" />
                                    <div className="testimonial-text">
                                        <h5>MOROJINK</h5>
                                        <p>CUSTOMER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et
                                            dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit
                                            in voluptate velit esse cillum dolore eu fugia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="testimonial-image-andbox">
                                    <img src={clientimage} width="120px" className="testimonial-className" />
                                    <div className="testimonial-text">
                                        <h5>MOROJINK</h5>
                                        <p>CUSTOMER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et
                                            dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit
                                            in voluptate velit esse cillum dolore eu fugia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="testimonial-image-andbox">
                                    <img src={clientimage} width="120px" className="testimonial-className" />
                                    <div className="testimonial-text">
                                        <h5>MOROJINK</h5>
                                        <p>CUSTOMER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et
                                            dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit
                                            in voluptate velit esse cillum dolore eu fugia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimonial