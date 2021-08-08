const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const mongoose = require('mongoose')
const Users = require('../models/userModel');
const Companies = require('../models/companyModel');
exports.VerifyUser = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "You must be loggin In" })
    }
    else {
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "you must be logginIn" })
            }
            else {
                const { _id } = payload
                Users.findById({ _id })
                    .then(userdata => {
                        req.user = userdata
                        next()
                    })
                //writing nex will run before the findbyid call so please write it above
                // next()
            }
        })
    }
}

exports.VerifyCompany = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "You must be loggin In" })
    }
    else {
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "you must be logginIn" })
            }
            else {
                const { _id } = payload
                Companies.findById({ _id })
                    .then(companydata => {
                        req.company = companydata
                        next()
                    })
                //writing nex will run before the findbyid call so please write it above
                // next()
            }
        })
    }
}

exports.verifyAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(401).json({ error: "You are not allowed." })
    }
    else {
        next()
    }
}

exports.verifyCompany = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "You must be loggin In" })
    }
    else {
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "you must be logginIn" })
            }
            else {
                const { _id } = payload
                Companies.findById({ _id })
                    .then(companyData => {
                        req.company = companyData
                        next()
                    })
                //writing nex will run before the findbyid call so please write it above
                // next()
            }
        })
    }
}