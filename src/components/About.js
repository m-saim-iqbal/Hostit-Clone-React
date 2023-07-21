import React from 'react'
import aboutimage from "../images/about-img.png"
import serverimage from "../images/about-img.png"

export default function About() {
    return (
        <div>
            <section className="container justify-content-center align-content-center">
                <div className="wrapper">
                    <div className="row flex-lg-row-reverse align-items-center g-5 px-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={aboutimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500"
                                loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 text-light4">About Us</h1>
                            <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything
                                embarrassing hidden in the middle of text. All adgfaee aewfawefawe fwegrtuhtyj yuute hrwgwer ge rwhy t
                                the Lorem Ipsumm</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn slider-btn2 btn-lg px-5 me-md-2">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="about-us-extend justify-content-center align-content-center">
                <img src={serverimage} width={"500px"}/>
                <div className="about-us-text">
                    <h3>Let us manage your server</h3>
                    <p>Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                        to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore</p>
                    <button type="button" className="btn slider-btn2 btn-lg px-4 me-md-2">READ MORE</button>
                </div>
            </div>
        </div>
    );
}
