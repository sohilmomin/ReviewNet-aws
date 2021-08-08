const express = require('express')
const bodyParser = require('body-parser')
const Products = require('../models/productModel')
const authenticate = require('../routes/authenticate')
const Users = require('../models/userModel')
const Reviews = require('../models/reviewModel')
const productRouter = express.Router()

productRouter.use(bodyParser.json())
productRouter.route('/')
    .get((req, res, next) => {
        console.log(req.query);
        Products.find(req.query)
            .populate('company')
            .then(products => {
                res.setHeader('Content-Type', 'application/json')
                res.json(products)
            }, (err) => next(err))
            .catch((err) => {
                res.status(422).json(err)
                next(err)
            })
    })
    .post(authenticate.verifyCompany, (req, res, next) => {
        req.body.company = req.company._id
        Products.create(req.body)
            .then(product => {
                Products.findById(product._id)
                    .populate('company')
                    .then(product => {
                        res.setHeader('Content-Type', 'application/json')
                        res.json(product)
                    }, err => next(err))
            })
            .catch((err) => {
                res.status(422).json(err)
                next(err)
            })
    })
productRouter.route('/myproducts')
    .get(authenticate.VerifyCompany, (req, res, next) => {
        Products.find({ company: req.company._id })
            .populate('company')
            .then(products => {
                res.setHeader('Content-Type', 'application/json')
                res.json(products)
            }, err => next(err))
            .catch(err => next(err))
    })
productRouter.route('/:productId')
    .put(authenticate.VerifyCompany, (req, res, next) => {
        Products.findByIdAndUpdate(req.params.productId, { $set: req.body }, { new: true })
            .then(product => {
                Products.findById(product._id)
                    .populate('company')
                    .then(product => {
                        res.setHeader('Content-Type', 'application/json')
                        res.json(product)
                    }, err => next(err))
            })
            .catch(err => next(err))
    })
    .delete(authenticate.VerifyCompany, (req, res, next) => {
        Products.findByIdAndDelete(req.params.productId)
            .then(product => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(product)
            })
            .catch(err => next(err))
    })
productRouter.route('/:catogery')
    .get((req, res, next) => {
        Products.find({ catogery: req.params.catogery })
            .then(products => {
                res.setHeader('Content-Type', 'application/json')
                res.json(products)
            }, (err) => next(err))
            .catch((err) => {
                res.status(422).json(err)
                next(err)
            })
    })
module.exports = productRouter