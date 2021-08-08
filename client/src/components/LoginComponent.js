import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { LocalForm, Control, Errors } from 'react-redux-form'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(values) {
        this.props.signIn(values.email, values.password);
    }
    render() {
        return (
            <div className='auth-page'>
                <div className='container'>
                    <div className='row '>
                        <div className='auth-box col-lg-4 col-md-7 col-sm-9 col-11 p-10 ml-auto mr-auto  mt-4 mb-4 pt-2 pb-2  text-white'>
                            <h3 className='text-center'>Login</h3>
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
                                    <Label md={12} htmlFor='.password'>Password</Label>
                                    <Col md={12}>
                                        <Control type='password' model='.password'
                                            id='password'
                                            className='form-control'
                                            placeholder='password'
                                        />
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col md={{ size: 12 }} className='text-center'>
                                        <Button type='submit' color="primary">Login <span className='fa fa-space-shuttle'></span></Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                            <div className='row'>
                                <div className='col-7'>
                                    <Link to='/signup' className='auth-link' data-tip="Signup here">Don't have an account?</Link>
                                </div>
                                <div className='col-5'>
                                    <Link to='/users/forgetpassword' className='auth-link' data-tip="Reset password here">Forget password?</Link>
                                </div>
                                <ReactTooltip type="info" />
                            </div>
                            <div className='row'>
                                <div className='col-12 '>
                                    <Link to='/company/signin' data-tip="Login as Company" className='auth-link'>Login for Company</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)