import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import queryString from 'query-string';
import { Loading } from './LoadingComponent'
import { Card, CardImg, CardText, CardTitle, CardSubtitle, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label, Row, Col, FormGroup } from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form'
import moment from 'moment';
import ReactQuill from 'react-quill'
import Parser from 'html-react-parser'
import 'react-quill/dist/quill.snow.css';
import { postLike, postDislike } from '../redux/ActionCreaters';
import ReactTooltip from 'react-tooltip';
function Star() {
    return (
        <span className="fa fa-star yellow-star"></span>
    )
}
function starMaker(rating) {
    const star = []
    for (var i = 0; i < rating; i++) {
        star.push(<Star />)
    }
    for (var i = 0; i < 5 - rating; i++) {
        star.push(<span className='fa fa-star'></span>)
    }
    return star
}

const minLength = (len) => (value) => value && value.length >= len
const maxLength = (len) => (value) => !value || value.length <= len
const required = (value) => value && value.length

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            tagList: [],
            rating: this.props.review ? this.props.review.rating : 1,
            inputTagList: this.props.review ? this.props.review.tags : [],
            review: this.props.review ? this.props.review.review : ""
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTagChange = this.handleTagChange.bind(this)
        this.handleTagSelect = this.handleTagSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTagCancle = this.handleTagCancle.bind(this)
    }
    handleChange(value) {
        this.setState({
            review: value
        })
    }
    handleSubmit(values) {
        this.toggleModal()
        this.props.review
            ?
            this.props.editReview(this.props.review._id, this.state.rating, this.state.inputTagList, this.state.review, this.props.product)
            :
            this.props.postReview(this.state.rating, this.state.inputTagList, this.state.review, this.props.product)
    }
    toggleModal() {
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }
    handleTagChange(value) {
        const tags = [
            'Excellent', 'Good', 'Great', 'Best', 'Value for money', 'Best in budget', 'Worthful', 'Nice', 'Quality', 'Highly recommended', 'Rubbish', 'Fabulous', 'Mind blowing', 'Super', 'Terrific', 'Wonderful', 'Decent',
            'Think it before buy', 'Worst experience', 'Cheap', 'Costly', 'Average Buy', 'Poor', 'Useless', 'Just okay'
        ]
        if (value === '') {
            this.setState({
                tagList: []
            })
        }
        else {
            const matches = tags.filter(tag => tag.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                tagList: matches
            })
        }

    }
    handleTagSelect(value) {
        let taglist = new Set(this.state.inputTagList)
        taglist.add(value)
        this.setState({
            inputTagList: Array.from(taglist)
        })
    }
    handleTagCancle(value) {
        this.setState({
            inputTagList: this.state.inputTagList.filter(tag => tag !== value)
        })
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        console.log(this.state.rating)
    }
    render() {
        const taglist = this.state.tagList.map(tag => {
            return (
                <span className='review-tag clickable col-auto' onClick={(e) => this.handleTagSelect(e.target.innerText)}>{tag}</span>
            )
        })
        const selectedTagList = this.state.inputTagList.map(tag => {
            return (
                <span className='mt-2'>
                    <span className='selected-tag col-auto'>{tag}</span><span className='cancle-tag clickable' onClick={(e) => this.handleTagCancle(tag)}> X </span>
                </span>
            )
        })
        this.props.review ? console.log('From Edit') : console.log('from Add')
        const { rating } = this.state.rating;
        return (
            <span >
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h4 className='review-form-heading'>Give Your Review Here</h4>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className='form-group'>
                                <Col md={12}>
                                    <Label className='mb-0'>Rating</Label>
                                </Col>
                                <Col md={12}>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={this.state.rating}
                                        className='rating-in-form'
                                        onStarClick={this.onStarClick.bind(this)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                {taglist.length !== 0 &&
                                    <div className='col-12'>
                                        <h6>Suggested Tags</h6>
                                        <div className='row review-tags'>
                                            {taglist}
                                        </div>
                                    </div>
                                }
                            </Row>
                            <Row>
                                {this.state.inputTagList.length !== 0 &&
                                    <div className='col-12'>
                                        <h6>Selected Tags</h6>
                                        <div className='row selected-tags'>
                                            {selectedTagList}
                                        </div>
                                    </div>
                                }
                            </Row>
                            <Row className='form-group'>
                                <Col md={12}>
                                    <Label htmlFor='.tags'>Tags</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea model='.tags'
                                        id='tags'
                                        className='form-control'
                                        placeholder='Search relevant tags here'
                                        rows='1'
                                        onChange={(e) => { this.handleTagChange(e.target.value) }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={12}>
                                    <Label htmlFor='.review'>Review</Label>
                                </Col>
                                <Col md={12}>
                                    <ReactQuill theme="snow" value={this.state.review} onChange={this.handleChange} />
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col md={{ size: 12 }} className='text-center'>
                                    <Button type='submit' color="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                {this.props.review
                    ?
                    <button className='edit-review-btn' data-for="edit-review" data-tip="Edit Review" onClick={this.toggleModal}><span className='fa fa-pencil'></span></button>
                    :
                    <Button className='btn submit-review' onClick={this.toggleModal} ><span className='fa fa-plus '></span> Add Review</Button>

                }
            </span>
        )
    }
}


class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: '',
            disliked: '',
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleLike() {
        this.props.postLike(this.props.review._id)
        this.setState({ liked: 'liked', disliked: '' })
        console.log(this.state.liked)
        console.log(this.state.disliked)
    }
    handleDislike() {
        this.props.postDislike(this.props.review._id)
        this.setState({ disliked: 'disliked', liked: '' })
        console.log(this.state.liked)
        console.log(this.state.disliked)
    }
    handleDelete() {
        this.props.deleteReview(this.props.review._id)
    }
    render() {
        const review = this.props.review
        const reviewTags = review.tags.map(tag => {
            return (
                <div className='review-tag col-auto '>{tag}</div>
            )
        })
        var liked = this.props.user.user && Object.keys(this.props.user.user).length !== 0 && review.likes.indexOf(this.props.user.user.user._id) !== -1 ? true : false;
        var disliked = this.props.user.user && Object.keys(this.props.user.user).length !== 0 && review.unlikes.indexOf(this.props.user.user.user._id) !== -1 ? true : false;

        return (
            <div className='col-md-10 col-12 p-md-3 p-2 mt-1 mb-2  review'>
                <div className='row'>
                    <div className='col-6'>
                        <span className='review-rating'>{review.rating}<span className='fa fa-star small-star'></span></span><span className='review-rating-star'>{starMaker(review.rating)}</span>
                    </div>
                    {
                        Object.keys(this.props.user.user).length !== 0 && this.props.user.user.user._id === review.author._id &&
                        <div className='col-6 text-right'>
                            <ReviewForm review={review} editReview={this.props.editReview} product={this.props.product} />
                            <button className='delete-review-btn' data-for="delete-review" data-tip="Delete review" onClick={this.handleDelete}><span className='fa fa-trash'></span></button>
                            <ReactTooltip id="edit-review" type="success" />
                            <ReactTooltip id="delete-review" type="error" />
                        </div>
                    }
                </div>
                {
                    review.tags
                    && <div className='review-tags row'>{reviewTags}</div>
                }
                <div className='review-footer'>
                    <p className='review-description'>{Parser(review.review)}</p>

                    <p className='likes-dislikes'>
                        <span className={liked ? "liked" : ""}><i className="material-icons like-icon" data-tip="Like review" data-for="like-review" onClick={this.handleLike}>thumb_up</i></span><span className='likes'>{review.likes.length}</span>
                        <span className={disliked ? "disliked" : ""}><i className="material-icons dislike-icon" data-tip="Dislike Review" data-for="dislike-review" onClick={this.handleDislike}>thumb_down</i></span><span className='dislikes'>{review.unlikes.length}</span>
                        <ReactTooltip id="like-review" type="info" />
                        <ReactTooltip id="dislike-review" type="error" />
                    </p>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <h6 className='review-author'>{review.author.fullname}</h6>
                        </div>
                        <div className='col-md-6 col-12'>
                            <p className='review-date'>- {moment(review.updatedAt).format('MMMM Do YYYY, h:mm a')}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const product = this.props.product;
        const catogeryList = product.catogery.map(catogery => {
            return (
                <span className='review-tag col-auto'>{catogery}</span>
            )
        })
        const subCatogeryList = product.subCatogery.map(subCatogery => {
            return (
                <span className='review-tag col-auto'>{subCatogery}</span>
            )
        })
        const productPic = product.pic || "https://res.cloudinary.com/sohil/image/upload/v1599586001/zwjupmysyf20v3yfpfus.jpg"
        return (
            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-4 col-12 image-block'>
                        <img className="img img-responsive product-image " src={productPic} alt="Card image " />
                    </div>
                    <div className='col-md-8 col-12 product-block p-1 p-md-3'>
                        <div className='row ml-0 ml-md-1 pl-2 pb-2 mr-0 mr-md-1 average-rating-block'>
                            <div className='col-12 pl-0'>
                                {
                                    isNaN(this.props.averageReview)
                                        ?
                                        <span className='no-ratings-product-block'>No ratings given yet</span>
                                        :
                                        <span>
                                            <span className='average-rating'>{this.props.averageReview.toFixed(1)}</span>
                                            <span className='average-rating-star'>{starMaker(this.props.averageReview.toFixed(0))}</span>
                                        </span>
                                }
                            </div>
                            <div className='col-md-6 col-12 pl-0'>
                                <span className='no-of-reviews-review-page pl-0'>({this.props.noOfreviews} {this.props.noOfreviews > 1 ? <span className='no-of-reviews-review-page'> Reviews)</span> : <span>Review)</span>} </span>
                            </div>
                        </div>
                        <div className='row ml-0 ml-md-1 pl-2 pb-2 mr-0 mr-md-1 product-detail-block'>
                            <div className='col-12 pl-0'>
                                <h5 className='mt-md-4 mt-2 mb-md-2 mb-2'>{product.productName}</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <p className='text-muted mb-1 company-name'>{product.company.fullname}</p>

                                    </div>

                                    <div className='col-md-6 col-12'>
                                        <p className='review-date'>- {moment(product.updatedAt).format('MMMM Do YYYY, h:mm a')}</p>
                                    </div>
                                </div>
                                <p className='product-price'>Rs. {product.price}</p>
                                <div className='row review-tags'>
                                    {catogeryList}
                                </div>
                                <div className='row review-tags'>
                                    {subCatogeryList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2 product-description-block'>
                        <h5 className='description-heading'>Description</h5>
                        <p className='description-content'>{Parser(product.description)}</p>
                    </div>
                </div>
            </div>
        )
    }
}
class Reviews extends Component {
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
        if (this.props.reviews.isLoading) {
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
        else if (this.props.reviews.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p>{this.props.reviews.errMess}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            const params = queryString.parse(this.props.location.search)
            const productReviews = this.props.reviews.reviews.filter(review => review.product === params.product);
            const noOfreviews = productReviews.length
            const reviews = productReviews.map((review) => {
                return (
                    <Review product={params.product} review={review} history={this.props.history} postLike={this.props.postLike} postDislike={this.props.postDislike} deleteReview={this.props.deleteReview} editReview={this.props.editReview} user={this.props.user} />
                )
            })
            var averageReview = this.avgReview(productReviews)
            console.log("average review is " + averageReview)
            if (averageReview === null) {
                averageReview = 0;
            }
            const productDetails = this.props.products.products.filter(product => product._id === params.product)[0]
            console.log(productDetails)
            return (
                <div className='container pl-0 pr-0'>
                    <div className='col-12 p-0 mt-1'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Reviews</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <h1 className='review-heading'>Reviews</h1>
                    <Product product={productDetails} averageReview={averageReview} noOfreviews={noOfreviews} />
                    <div className='col-12 p-md-3 p-2 mt-1 avg-rating'>
                        <div className='col-md-6 col-12 pl-0'>
                            <p className='review-form-question'> Wants to share your experiance ?</p>
                        </div>
                        {
                            this.props.user.user && Object.keys(this.props.user.user).length !== 0 ?
                                <ReviewForm postReview={this.props.postReview} product={params.product} user={this.props.user} />
                                :
                                <div className='row'>
                                    <div className='col-lg-7 col-12'>
                                        <div className='row login-notice-block ml-md-3 mr-md-3 ml-1 mr-1'>
                                            <div className='col-12 pb-2'>Looks like you are not logged in as user. Login to Add your valuable review.</div>
                                            <div className='col-lg-2 col-4'><button className='btn btn-success login-btn-review-page' onClick={() => { this.props.history.push('/signin') }}>Login</button></div>
                                            <div className='col-lg-2 col-4'><button className='btn btn-primary signup-btn-review-page' onClick={() => { this.props.history.push('/signup') }}>Signup</button></div>
                                        </div>

                                    </div>

                                </div>

                        }
                    </div>

                    <div className='row reviews-list'>
                        {reviews}
                    </div>
                </div>
            )
        }
    }
}
export default withRouter(Reviews);