import React from 'react'

function Services(props) {
    return (
            <div className="col-md-4">
                <div className="feature  service-card">
                    <div className="services-images">
                        <img src={props.image} />
                    </div>
                    <h3 className="fs-2 text-body-emphasis" style={{ textAlign: "center" }}>{props.heading}</h3>
                    <p style={{ textAlign: "center" }}>{props.description}</p>
                    <a href="./s1.png" className="icon-link service-read">
                        Read More
                    </a>
                </div>
            </div>
    );
}

export default Services