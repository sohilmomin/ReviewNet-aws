import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class ContactUs extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row  pt-md-5 pt-2 pb-md-5 pb-2' >
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='https://www.linkedin.com/in/mohamadsohil-momin'>
                        <div className='row'>
                            <div className='col-4 platform-div' >
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/linkedIn.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>LinkedIn</h4><p className='username'>Mohamadsohil Momin</p><p className='profile-link'>https://www.linkedin.com/in/mohamadsohil-momin</p></div>
                        </div>
                    </a>
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='https://github.com/sohilmomin'>
                        <div className='row'>
                            <div className='col-4'>
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/github.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>GitHub</h4><p className='username'>@sohilmomin</p><p className='profile-link'>https://github.com/sohilmomin</p></div>
                        </div>
                    </a>
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='https://www.youtube.com/channel/UC0KkLRY55KPim6CZuMCSk6w'>
                        <div className='row'>
                            <div className='col-4'>
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/youtube-2.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>YouTube</h4><p className='username'>this sohil</p><p className='profile-link'>https://www.youtube.com/channel/UC0KkLRY55KPim6CZuMCSk6w</p></div>
                        </div>
                    </a>
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='mailto:sohilmomin711@gmail.com' >
                        <div className='row'>
                            <div className='col-4'>
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/email.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>Email</h4><p className='username'>sohilmomin711@gmail.com</p><p className='profile-link'>mailto:sohilmomin711@gmail.com</p></div>
                        </div>
                    </a>
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='https://twitter.com/this_sohil'>
                        <div className='row'>
                            <div className='col-4'>
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/twitter.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>Twitter</h4><p className='username'>@this_sohil</p><p className='profile-link'>https://twitter.com/this_sohil</p></div>
                        </div>
                    </a>
                    <a className='col-md-5 col-11 contactus-icon' target="_blank" href='https://www.instagram.com/this.sohil/'>
                        <div className='row'>
                            <div className='col-4'>
                                <img top cap className="img img-responsive thumb contactus-img" src="/assets/images/social-media/instagram.png" alt="leader image " />
                            </div>
                            <div className='col-8 pl-0'><h4 className='contactus-platform'>Instagram</h4><p className='username'>@this.sohil</p><p className='profile-link'>https://www.instagram.com/this.sohil/</p></div>

                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default withRouter(ContactUs)