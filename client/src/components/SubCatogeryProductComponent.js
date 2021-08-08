import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Loading } from './LoadingComponent'
import ReactTooltip from 'react-tooltip';

class Product extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
    }
    routeChange(productId) {
        let path = '/reviews?product=' + productId;
        this.props.history.push(path);
    }
    render() {
        const product = this.props.product
        const productPic = product.pic || "https://res.cloudinary.com/sohil/image/upload/v1599586001/zwjupmysyf20v3yfpfus.jpg"
        return (
            <Card className='col-lg-3 col-md-4 col-sm-6 col-12 m-md-0 pl-0 pr-0 m-auto'>
                <div className='image'>
                    <img className="img img-responsive thumb product-small-image" src={productPic} alt="Card image " />
                </div>
                <CardBody >
                    <h2 className='product-card-title' data-tip={product.productName} data-for="producttitle">{product.productName}
                    </h2>
                    <ReactTooltip effect="float" id="producttitle" type="warning" />
                    <span>
                        {
                            isNaN(product.averageReview)
                                ? <span className='product-review'></span>
                                : <span className='product-review review-rating'>{product.averageReview}<span className='fa fa-star small-star'></span></span>
                        }
                        <span className='no-of-reviews'> {this.props.noOfreviews} {this.props.noOfreviews > 1 ? <span className='no-of-reviews'> Reviews</span> : <span>Review</span>} </span>
                    </span>
                    <div className='row' >
                        <div className='col-md-6 col-12 text-muted company-name pb-1'>
                            {product.company.fullname}
                        </div>
                        <div className='col-md-6 col-12'>
                            {product.price} Rs.
                            </div>
                    </div>
                    <div className='review-tags'>
                        <p className='product-subcatogery review-tag'>{product.subCatogery[0]}</p>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 explore-review-button text-white text-center' onClick={() => this.routeChange(product._id)}>
                                See All Reviews
                        </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        )
    }
}
class SubCatogeryProducts extends Component {
    constructor(props) {
        super(props)
        this.avgReview = this.avgReview.bind(this)
    }
    avgReview(reviews) {
        var reviewSum = 0;
        var totalReviews = 0;
        for (var i = 0; i < reviews.length; i++) {
            reviewSum = reviewSum + reviews[i].rating;
            totalReviews = totalReviews + 1;
        }
        return (reviewSum / totalReviews);
    }
    render() {
        if (this.props.products.isLoading) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Loading />
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.products.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p>{this.props.products.errMess}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            const subCatogery = window.location.pathname.split('/')[3]
            const productsList = this.props.products.products.filter(product => product.subCatogery.includes(subCatogery) === true)
            const products = productsList.map((product) => {
                var averageReview = 0
                if (this.props.reviews.reviews.length > 0) {
                    averageReview = this.props.reviews.reviews.filter(review => review.product === product._id)
                    averageReview = this.avgReview(averageReview);
                }
                product.averageReview = averageReview.toFixed(1)
                return (
                    <Product product={product} history={this.props.history} noOfreviews={this.props.reviews.reviews.filter(review => review.product === product._id).length} />
                )
            })
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 p-0 mt-1'>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to="/products">Products</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{subCatogery}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        <div className='col-12 p-0'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='subcatogery-product-heading'>{subCatogery}</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    {products.length === 0 ?
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h2 className='no-product-msg'>No product for this sub catogery.</h2>
                            </div>
                        </div>
                        :
                        <div className='row'>
                            {products}
                        </div>
                    }

                </div>
            )
        }
    }
}
export default withRouter(SubCatogeryProducts);