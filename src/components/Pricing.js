import React from 'react'

function Pricing(props) {
    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className=" py-3">
                    <h4 className="my-0 fw-bolder fs-2">{props.price}</h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{props.ram}</li>
                        <li>{props.storage}</li>
                        <li>Weekly Backups</li>
                        <li>DDoS Protection</li>
                        <li>Full Root Access</li>
                        <li>24/7/365 Tech Support</li>
                    </ul>
                    <button type="button" className="w-50 btn btn-lg btn-danger">See Details</button>
                </div>
            </div>
        </div>
    )
}


export default Pricing
