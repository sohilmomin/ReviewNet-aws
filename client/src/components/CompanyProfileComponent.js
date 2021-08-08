import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { BreadcrumbItem, Breadcrumb } from 'reactstrap'
class UserProfile extends Component {
    render() {
        return (
            <div className='container-fluid'>
                {Object.keys(this.props.company.company).length !== 0 ?
                    <div className='row justify-content-center profile-back'>
                        <div className='col-12 p-0 mt-1' align="center">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Profile</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className='col-md-5 col-12 user-profile-block' align='center'>
                            <h1 className='welcome-heading text-white'>Welcome {this.props.company.company.company.fullname}</h1>
                            <img src={this.props.company.company.company.pic} alt='profile pic' />
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0' >
                                <div className='col-md-3 col-4 profile-key profile-key-top'>Company name</div>
                                <div className='col-md-8 col-8 profile-value profile-value-top'>{this.props.company.company.company.name}</div>
                            </div>
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0'>
                                <div className='col-md-3 col-4 profile-key'>Full name</div>
                                <div className='col-md-8 col-8 profile-value'>{this.props.company.company.company.fullname}</div>
                            </div>
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0'>
                                <div className='col-md-3 col-4 profile-key profile-key-bottom'>Email </div>
                                <div className='col-md-8 col-8 profile-value profile-value-bottom'>{this.props.company.company.company.email}</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-6'><button className='edit-profile' onClick={() => { this.props.history.push('/notavaliable') }}>Edit Profile</button></div>
                                <div className='col-md-6 col-6'><button className='reset-password' onClick={() => { this.props.history.push('/company/forgetpassword') }}>Reset Password</button></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='row mt-5 mb-5' align='center'>
                        <div className='col-lg-4 col-12 m-auto bg-info pt-5 pb-5 text-white'>
                            <h1 className='not-avaliable-heading'>Are you Logged In ? </h1>
                            <p>Looks like you are not logged in , please Log In to view this page.</p>
                            <button className='btn-success text-white' onClick={() => { this.props.history.push('/signin') }}>Login here <span className='fa fa-space-shuttle'></span></button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default withRouter(UserProfile)