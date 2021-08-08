import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { LocalForm, Control, Errors } from 'react-redux-form'
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(values) {
        this.props.newPassword(values.password, this.props.token);
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
                                        <Button type='submit' color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ResetPassword)