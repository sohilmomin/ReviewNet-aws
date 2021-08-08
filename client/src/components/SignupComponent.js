import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { LocalForm, Control, Errors, controls } from 'react-redux-form'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

const minLength = (len) => (value) => !value || value.length >= len
const maxLength = (len) => (value) => !value || value.length <= len
const required = (value) => value && value.length

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(values) {
        this.props.signUp(values.name, values.email, values.password, values.fullname)
        console.log(values)
    }
    render() {
        return (
            <div className='auth-page' >
                <div className='container'>
                    <div className='row '>
                        <div className='auth-box col-lg-4 col-md-7 col-sm-9 col-11 p-10 ml-auto mr-auto  mt-4 mb-4 pt-2 pb-2  text-white'>
                            <h3 className='text-center'>Signup</h3>
                            <LocalForm onSubmit={this.handleSubmit} row>
                                <Row className='form-group'>
                                    <Label md={12} htmlFor='.fullname'>Full name</Label>
                                    <Col md={12}>
                                        <Control.text model='.fullname'
                                            id='fullname'
                                            className='form-control'
                                            placeholder='Walter White'
                                            validators={{ minLength: minLength(3), maxLength: maxLength(30) }}
                                        />
                                        <Errors
                                            className='form-error'
                                            model='.fullname'
                                            show='touched'
                                            messages={{
                                                minLength: 'Must be at least 3 character long ',
                                                maxLength: 'Must be at most 30 character long '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label md={12} htmlFor='.name'>Username</Label>
                                    <Col md={12}>
                                        <Control.text model='.name'
                                            id='name'
                                            className='form-control'
                                            placeholder='walter.white (unique)'
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                        />
                                        <Errors
                                            className='form-error'
                                            model='.name'
                                            show='touched'
                                            messages={{
                                                required: 'Required, ',
                                                minLength: 'Must be at least 3 character long ',
                                                maxLength: 'Must be at most 15 character long '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label md={12} htmlFor='.email'>Email</Label>
                                    <Col md={12}>
                                        <Control.text model='.email'
                                            id='email'
                                            className='form-control'
                                            placeholder='walter@example.com'
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(40) }}
                                        />
                                        <Errors
                                            className='form-error'
                                            model='.email'
                                            show='touched'
                                            messages={{
                                                required: 'Required, ',
                                                minLength: 'Must be at least 3 character long ',
                                                maxLength: 'Must be at most 40 character long '
                                            }}
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
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(30) }}
                                        />
                                        <Errors
                                            className='form-error'
                                            model='.password'
                                            show='touched'
                                            messages={{
                                                required: 'Required, ',
                                                minLength: 'Must be at least 3 character long ',
                                                maxLength: 'Must be at most 30 character long '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col md={{ size: 12 }} className='text-center'>
                                        <Button type='submit' color="primary">Signup <span className='fa fa-space-shuttle'></span></Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                            <div className='row'>
                                <div className='col-7'>
                                    <Link to='/signin' data-tip="Login here" className='auth-link'>Already have an account?</Link>
                                </div>
                                <div className='col-5'>
                                    <Link to='/users/forgetpassword' data-tip="Reset Password here" className='auth-link'>Forget password?</Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 '>
                                    <Link to='/company/signup' data-tip="Register for company" className='auth-link'>Signup for Company</Link>
                                </div>
                            </div>
                            <ReactTooltip type="info" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
