import React from 'react'

const Footer = () => {
    return (
        <footer className="pt-4  pt-md-5 border-top">
            <div className="row m-0 px-5">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-white">© 2017–2023</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Cool stuff</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Random feature</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Team feature</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Stuff for developers</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Another one</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Last time</p></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Resource</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Resource name</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Another resource</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Final resource</p></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Team</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Locations</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Privacy</p></li>
                        <li className="mb-1"><p className="link-secondary text-decoration-none" >Terms</p></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer