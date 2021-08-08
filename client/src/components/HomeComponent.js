import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

class Home extends Component {
    render() {
        return (
            Object.keys(this.props.user.user).length !== 0 ?
                <div className='container-fluid'>
                    <div className='home-welcome-msg'>
                        <span className='fa fa-star  d-sm-inline d-none'> </span>
                        <span className='fa fa-star  d-sm-inline d-none'> </span>
                        <span className='fa fa-star  d-sm-inline d-none'> </span> Welcome back {this.props.user.user.user.fullname} <span className='fa fa-star  d-sm-inline d-none'> </span>
                        <span className='fa fa-star  d-sm-inline d-none'> </span>
                        <span className='fa fa-star  d-sm-inline d-none'> </span>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                            <h4 className='home-card-heading-left m-0 p-2'>Your profile needs your attention</h4>
                            <div className='home-card-body-left p-2'>
                                <p className='home-card-text'>Builing solid profile makes better impression among others, Why dont you check your profile and make some amazing changes ! </p>
                                <button className=' btn home-card-button' onClick={() => { this.props.history.push('/userprofile') }}>Go to profile <span className='fa fa-space-shuttle'></span></button>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                            <img src='/assets/images/illustrators/red_review.jpg' alt="red review" height="300px" align="center"></img>
                        </div>
                        <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                            <img src='/assets/images/illustrators/blue_review.jpg' alt="red review" height="300px" align="center"></img>
                        </div>
                        <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                            <h4 className='home-card-heading-right m-0'>Thinking to buy new Smartphone ?</h4>
                            <div className='home-card-body-right '>
                                <p className='home-card-text'>Beware of false advertisement, always check trusted users's reviews and save yourself from fruad.</p>
                                <button className=' btn home-card-button' onClick={() => { this.props.history.push('/products/subcatogery/Mobiles') }}>check smartphone reviews <span className='fa fa-space-shuttle'></span></button>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                            <h4 className='home-card-heading-left m-0 p-2'>Wants to give suggestions ? </h4>
                            <div className='home-card-body-left p-2'>
                                <p className='home-card-text'>Your valuable feedback will help us to improve your experience, Just contact us on any of mentioned platform and contribute towards better journey</p>
                                <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Give suggestions! <span className='fa fa-space-shuttle'></span></button>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                            <img src='/assets/images/illustrators/yellow_review.jpg' alt="red review" height="300px" align="center"></img>
                        </div>

                        <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                            <img src='/assets/images/illustrators/violet_review.jpg' alt="red review" height="300px" align="center"></img>
                        </div>
                        <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                            <h4 className='home-card-heading-right m-0'>What next, Hold on !</h4>
                            <div className='home-card-body-right'>
                                <p className='home-card-text'>We will soon release major update with features including Edit profile, Email support for account security, Enhanced review system, Search and filter for products and reviews and many more !!!</p>
                                <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Contribute with us <span className='fa fa-space-shuttle'></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                : Object.keys(this.props.company.company).length !== 0 ?
                    <div className='container-fluid'>
                        <div className='home-welcome-msg'>
                            <span className='fa fa-star  d-sm-inline d-none'> </span>
                            <span className='fa fa-star  d-sm-inline d-none'> </span>
                            <span className='fa fa-star  d-sm-inline d-none'> </span> Welcome back {this.props.company.company.company.fullname} <span className='fa fa-star  d-sm-inline d-none'> </span>
                            <span className='fa fa-star  d-sm-inline d-none'> </span>
                            <span className='fa fa-star  d-sm-inline d-none'> </span>
                        </div>
                        <div className='row align-items-center'>
                            <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                                <h4 className='home-card-heading-left m-0 p-2'>Your profile needs your attention</h4>
                                <div className='home-card-body-left p-2'>
                                    <p className='home-card-text'>Builing solid profile makes better impression among others, Why dont you check your profile and make some amazing changes ! </p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/notavaliable') }}>Go to profile <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/red_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/blue_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                                <h4 className='home-card-heading-right m-0'>Want to Look Reviews on your products ?</h4>
                                <div className='home-card-body-right '>
                                    <p className='home-card-text'>Getting reviews from trusted users will help you know your product success-rate well, reviews will help manage your next successful product launch.</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/products/myproducts') }}>Cheak your products<span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                                <h4 className='home-card-heading-left m-0 p-2'>Wants to give suggestions ? </h4>
                                <div className='home-card-body-left p-2'>
                                    <p className='home-card-text'>Your valuable feedback will help us to improve your experience, Just contact us on any of mentioned platform and contribute towards better journey</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Give suggestions! <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/yellow_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>

                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/violet_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                                <h4 className='home-card-heading-right m-0'>What next, Hold on !</h4>
                                <div className='home-card-body-right'>
                                    <p className='home-card-text'>We will soon release major update with features including Edit profile, Email support for account security, Enhanced review system, Search and filter for products and reviews and many more !!!</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Contribute with us <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                                <h4 className='home-card-heading-left m-0 p-2'>Signup for amazing experience</h4>
                                <div className='home-card-body-left p-2'>
                                    <p className='home-card-text'>Are you here for the first time, then welcome to the wolrd of reviews. Check out trusted users's reviews before buying any product. Signup to share your own experience for any product.</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/signup') }}>Sign up<span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/red_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/blue_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                                <h4 className='home-card-heading-right m-0'>Thinking to buy new Smartphone ?</h4>
                                <div className='home-card-body-right '>
                                    <p className='home-card-text'>Beware of false advertisement, always check trusted users's reviews and save yourself from fruad.</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/products/subcatogery/Mobiles') }}>check smartphone reviews <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pl-0 home-card-left mb-2 mt-2'>
                                <h4 className='home-card-heading-left m-0 p-2'>Wants to give suggestions ? </h4>
                                <div className='home-card-body-left p-2'>
                                    <p className='home-card-text'>Your valuable feedback will help us to improve your experience, Just contact us on any of mentioned platform and contribute towards better journey</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Give suggestions! <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/yellow_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>

                            <div className='col-md-6 col-12 text-center d-lg-block d-none'>
                                <img src='/assets/images/illustrators/violet_review.jpg' alt="red review" height="300px" align="center"></img>
                            </div>
                            <div className='col-md-6 col-12 pr-0 home-card-right mb-2 mt-2'>
                                <h4 className='home-card-heading-right m-0'>What next, Hold on !</h4>
                                <div className='home-card-body-right'>
                                    <p className='home-card-text'>We will soon release major update with features including Edit profile, Email support for account security, Enhanced review system, Search and filter for products and reviews and many more !!!</p>
                                    <button className=' btn home-card-button' onClick={() => { this.props.history.push('/contactus') }}>Contribute with us <span className='fa fa-space-shuttle'></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default withRouter(Home)