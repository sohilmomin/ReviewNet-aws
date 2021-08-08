const express = require('express')
const bodyParser = require('body-parser')
//const authenticate = require('../authenticate')
const reviewRouter = express.Router()
const cors = require('./cors')
const Users = require('../models/userModel')
const Reviews = require('../models/reviewModel')
const authenticate = require('../routes/authenticate')
reviewRouter.use(bodyParser.json())

reviewRouter.route('/')
    .get((req, res, next) => {
        Reviews.find(req.query)
            .populate('author')
            .then(reviews => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(reviews)
            })
            .catch(err => next(err))
    })
    .post(authenticate.VerifyUser, (req, res, next) => {
        const review = req.body
        review.author = req.user._id
        Reviews.findOne({ product: review.product, author: review.author })
            .then(savedReview => {
                if (savedReview) {
                    res.setHeader('Content-Type', 'application/json')
                    res.status(500).json({ message: 'You have already submitted your review' })
                }
                else {
                    Reviews.create(review)
                        .then(review => {
                            Reviews.findById(review._id)
                                .populate('author')
                                .then(review => {
                                    res.setHeader('Content-Type', 'application/json')
                                    res.status(200).json(review)
                                }, err => next(err))
                                .catch(err => next(err))
                        }, err => next(err))
                        .catch(err => next(err))
                }
            }, err => next(err))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        Reviews.remove()
            .then(reviews => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(reviews)
            })
            .catch(err => next(err))
    })

reviewRouter.route('/:reviewId')
    .get((req, res, next) => {
        Reviews.findById(req.params.id)
            .then(review => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(review)
            })
            .catch(err => next(err))
    })
    .put(authenticate.VerifyUser, (req, res, next) => {
        Reviews.findByIdAndUpdate(req.params.reviewId, { $set: req.body }, { new: true })
            .then(review => {
                Reviews.findById(review._id)
                    .populate('author')
                    .then(review => {
                        res.setHeader('Content-Type', 'application/json')
                        res.status(200).json(review)
                    }, err => next(err))
                    .catch(err => next(err))
            })
            .catch(err => next(err))
    })
    .delete(authenticate.VerifyUser, (req, res, next) => {
        Reviews.findByIdAndDelete(req.params.reviewId)
            .populate('author')
            .then(review => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(review)
            })
            .catch(err => next(err))
    })
reviewRouter.route('/likes/:reviewId')
    .put(authenticate.VerifyUser, (req, res, next) => {
        Reviews.findByIdAndUpdate(req.params.reviewId, { $addToSet: { likes: req.user._id }, $pull: { unlikes: req.user._id } }, { new: true })
            .then(review => {
                Reviews.findById(review._id)
                    .populate('author')
                    .then(review => {
                        res.setHeader('Content-Type', 'application/json')
                        res.status(200).json(review)
                    }, err => next(err))
                    .catch(err => next(err))
            }, err => next(err))
            .catch(err => next(err))
    })
reviewRouter.route('/dislikes/:reviewId')
    .put(authenticate.VerifyUser, (req, res, next) => {
        Reviews.findByIdAndUpdate(req.params.reviewId, { $addToSet: { unlikes: req.user._id }, $pull: { likes: req.user._id } }, { new: true })
            .then(review => {
                Reviews.findById(review._id)
                    .populate('author')
                    .then(review => {
                        res.setHeader('Content-Type', 'application/json')
                        res.status(200).json(review)
                    }, err => next(err))
                    .catch(err => next(err))
            })
            .catch(err => next(err))
    })
module.exports = reviewRouter