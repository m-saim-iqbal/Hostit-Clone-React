import React from 'react'
import sliderimage from "../images/slider-img.png"

function Header() {
    return (
        <div className="header-main">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container justify-content-center align-content-center">
                            <div className="">
                                <div className="row m-0 flex-lg-row-reverse align-items-center g-5 px-5 py-5">
                                    <div className="col-10 col-sm-8 col-lg-6">
                                        <img src={sliderimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                                            height="500" loading="lazy" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="display-5 fw-bold lh-1 mb-3 text-light4">Fast & Secure
                                            Web Hosting</h1>
                                        <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                            <button type="button" className="btn slider-btn1 btn-lg px-5 me-md-2">READ MORE</button>
                                            <button type="button" className="btn slider-btn2 btn-lg px-5">CONTACT US</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container justify-content-center align-content-center">
                            <div className="">
                                <div className="row m-0 flex-lg-row-reverse align-items-center g-5 px-5 py-5">
                                    <div className="col-10 col-sm-8 col-lg-6">
                                        <img src={sliderimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                                            height="500" loading="lazy" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="display-5 fw-bold lh-1 mb-3 text-light4">Fast & Secure
                                            Web Hosting</h1>
                                        <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                            <button type="button" className="btn slider-btn1 btn-lg px-5 me-md-2">READ MORE</button>
                                            <button type="button" className="btn slider-btn2 btn-lg px-5">CONTACT US</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container justify-content-center align-content-center">
                            <div className="">
                                <div className="row flex-lg-row-reverse align-items-center g-5 px-5 py-5">
                                    <div className="col-10 col-sm-8 col-lg-6">
                                        <img src={sliderimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                                            height="500" loading="lazy"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="display-5 fw-bold lh-1 mb-3 text-light4">Fast & Secure
                                            Web Hosting</h1>
                                        <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                            <button type="button" className="btn slider-btn1 btn-lg px-5 me-md-2">READ MORE</button>
                                            <button type="button" className="btn slider-btn2 btn-lg px-5">CONTACT US</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Header