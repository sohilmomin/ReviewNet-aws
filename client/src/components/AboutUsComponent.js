import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Media, Card, CardBody, CardHeader } from 'reactstrap'
class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content mission-section">
                    <div className="col-12 col-md-6">
                        <h2>Our Mission</h2>
                        <p>Started in Oct 2020, Review Net quickly established itself as a revolutionary icon par excellence in Sohil's mind.
                        Current generation fall into trap of false advertise without actually knowing about product itself.
                            Only experienced user can give <cite>The true sense of any product</cite>.
                        </p><p>
                            <b>Good review from a user is the only success of any product.</b>
                        </p>
                        <p>We are here to implement this mindset to globe any make them help buying any product.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card className='mt-2'>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">1 Oct. 2020</dd>
                                    <dt className="col-6">FrontEnd</dt>
                                    <dd className="col-6">React, Redux, Bootstrap</dd>
                                    <dt className="col-6">BackEnd</dt>
                                    <dd className="col-6">NodeJS, ExpressJS, MongoDb</dd>
                                    <dt className="col-6">Goal</dt>
                                    <dd className="col-6">Make It Real</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody className="quote">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Everything that can be sold in the world, can be reviewed</p>
                                    <footer className="blockquote-footer">Sohil Momin,
                                <cite title="Source Title"> Future Rising personality</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content corporate-section">
                    <div className="col-12 mt-2">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <div className="col-12">
                        <div className="row mb-2">
                            <div className='col-12 col-md-3'>
                                <img top cap className="img img-responsive thumb" src="/assets/images/Sohil.png" alt="leader image " />
                            </div>
                            <div className='col-12 col-md-9 pt-2 pl-md-0'>
                                <h4>Mohamadsohil Momin</h4>
                                <h6>Founder & CEO (Chief executive officer)</h6>
                                <p>MERN stack web developer, Machine learning enthusiast, Competitive Programmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AboutUs)