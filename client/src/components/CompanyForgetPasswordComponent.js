import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { LocalForm, Control, Errors } from 'react-redux-form'
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
class CompanyForgetPassword extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(values) {
        console.log(values + ' at component handle');
        this.props.companyResetPassword(values.email);
    }
    render() {
        return (
            <div className='auth-page'>
                <div className='container'>
                    <div className='row '>
                        <div className='auth-box col-lg-4 col-md-7 col-sm-9 col-11 p-10 ml-auto mr-auto  mt-4 mb-4 pt-2 pb-2  text-white'>
                            <h3 className='text-center'>Reset Password</h3>
                            <LocalForm onSubmit={this.handleSubmit} row>
                                <Row className='form-group'>
                                    <Label md={12} htmlFor='.email'>Email</Label>
                                    <Col md={12}>
                                        <Control.text model='.email'
                                            id='email'
                                            className='form-control'
                                            placeholder='walter@example.com'
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={12}>
                                        <p className='font-size-1' style={{ "font-size": "13px", "padding-left": "5px" }}>A link will be sent on this Email for reseting password.</p>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col md={{ size: 12 }} className='text-center'>
                                        <Button type='submit' color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                            <div className='row'>
                                <div className='col-7'>
                                    <Link to='/signup' data-tip="Signup here" className='auth-link'>Don't have an account?</Link>
                                </div>
                                <ReactTooltip type="info" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CompanyForgetPassword)