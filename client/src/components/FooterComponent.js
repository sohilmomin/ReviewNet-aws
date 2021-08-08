import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row justify-content-center pt-2">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className='auth-link'>Home</Link></li>
                            <li><Link to="/products" className='auth-link'>Products</Link ></li>
                            <li><Link to="/aboutus" className='auth-link'>About</Link ></li>
                            <li><Link to="/contactus" className='auth-link'>Contact</Link ></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            G321, HoR Men<br />
		              DAIICT, Gandhinagar<br />
		              Gujarat, INDIA<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 9898 140 595<br />
                            <i className="fa fa-fax fa-lg"></i>: +91 84 6000 4309<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a className='auth-link' href="mailto:info@review.net">
                                info@review.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon " target="_blank" href="https://github.com/sohilmomin"><i className="fa fa-github social-icon"></i></a>
                            <a className="btn btn-social-icon" target="_blank" href="https://www.instagram.com/this.sohil/"><i className="fa fa-instagram social-icon"></i></a>
                            <a className="btn btn-social-icon " target="_blank" href="https://www.linkedin.com/in/mohamadsohil-momin"><i className="fa fa-linkedin social-icon"></i></a>
                            <a className="btn btn-social-icon" target="_blank" href="https://twitter.com/this_sohil"><i className="fa fa-twitter social-icon"></i></a>
                            <a className="btn btn-social-icon " target="_blank" href="https://www.youtube.com/channel/UC0KkLRY55KPim6CZuMCSk6w"><i className="fa fa-youtube social-icon"></i></a>
                            <a className="btn btn-social-icon" target="_blank" href="mailto:sohilmomin711@gmail.com"><i className="fa fa-envelope-o social-icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 Review Net </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer