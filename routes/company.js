var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const { SENDGRID_API, EMAIL } = require('../config/keys')
const sendGridTransport = require('nodemailer-sendgrid-transport')
const Companies = require('../models/companyModel');
const authenticate = require('../routes/authenticate')
//var authenticate = require('../authenticate');
var CompanyRouter = express.Router();
CompanyRouter.use(bodyParser.json())
const tranporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: SENDGRID_API
    }
}))
CompanyRouter.post('/signup', (req, res) => {
    const { name, email, password, pic, fullname } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please add all the  fields" })
    }
    else {
        Companies.findOne({ $or: [{ email: email }, { name: name }] })
            .then((savedCompany) => {
                if (savedCompany) {
                    return res.status(422).json({ error: "Company with same name or email already exist" })
                }
                else {
                    bcrypt.hash(password, 12)
                        .then((hasedpassword => {
                            const company = new Companies({ name, email, password: hasedpassword, pic: pic, fullname: fullname, isVerified: false })
                            company.save()
                                .then((company) => {
                                    res.json({ message: "Registration request sent Successfully, We will emal you after verifing your details. " })
                                })
                        }))
                }
            })
            .catch(err => {
                console.log("error to find such User")
                console.log(err)
            })
    }
})

CompanyRouter.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please provide email or password" })
    }
    else {
        Companies.findOne({ email: email })
            .then((savedCompany) => {
                if (!savedCompany) {
                    return res.status(422).json({ error: "Invalid Email or password" })
                }
                else {
                    bcrypt.compare(password, savedCompany.password)
                        .then(doMatch => {
                            if (doMatch) {
                                if (!savedCompany.isVerified) {
                                    res.json({ message: "You are not verified yet. Wait for our Email." })
                                }
                                else {
                                    const token = jwt.sign({ _id: savedCompany._id }, JWT_SECRET)
                                    const { _id, name, email, fullname, pic } = savedCompany
                                    res.json({ token, company: { _id, name, email, fullname, pic } })
                                    //res.json({ message: "successfully signed in" })
                                }
                            }
                            else {
                                return res.status(422).json({ error: "Invalid Email or password" })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
    }
})

CompanyRouter.get("/companydata", authenticate.verifyCompany, (req, res, next) => {
    req.company.password = null
    const { authorization } = req.headers
    const token = authorization.replace("Bearer ", "")
    const { _id, name, email, fullname, pic } = req.company
    res.json({ token, company: { _id, name, email, fullname, pic } })
})

CompanyRouter.get('/not-verified', authenticate.VerifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Companies.find({ isVerified: false })
        .then((companies) => {
            res.setHeader('Content-Type', 'application/json')
            res.json(companies)
        }, (err) => next(err))
        .catch((err) => {
            res.status(422).json(err)
            next(err)
        })
})
CompanyRouter.put('/verify', authenticate.VerifyUser, authenticate.verifyAdmin, (req, res, next) => {
    console.log(req.body.id)
    Companies.findByIdAndUpdate(req.body.id, { isVerified: true }, { new: true })
        .then((company) => {
            res.json(company)
            console.log('successfully verified ' + company.isVerified)
        }, (err) => next(err))
        .catch((err) => {
            next(err)
        })
})





CompanyRouter.post("/resetpassword", (req, res, next) => {
    crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            console.log(err)
        }
        else {
            const token = Buffer.toString("hex")
            Companies.findOne({ email: req.body.email })
                .then(company => {
                    if (!company) {
                        return res.status(404).json({ error: "Email not exist" })
                    }
                    else {
                        if (company.isVerified) {
                            company.resetToken = token,
                                company.expireToken = Date.now() + 3600000
                            company.save().then((result) => {
                                tranporter.sendMail({
                                    to: company.email,
                                    from: "sohilmomin01@gmail.com",
                                    subject: "Reset password",
                                    html: `<!doctype html>
                                    <html lang="en-US">
                                    
                                    <head>
                                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                                        <title>Reset Password Email Template</title>
                                        <meta name="description" content="Reset Password Email Template.">
                                        <style type="text/css">
                                            a:hover {text-decoration: underline !important;}
                                        </style>
                                    </head>
                                    
                                    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                                        <!--100% body table-->
                                        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                                            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                                            <tr>
                                                <td>
                                                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                                                        align="center" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td style="height:80px;">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align:center;">
                                                              <a href="https://reviewnet.herokuapp.com" title="logo" target="_blank">
                                                                <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">
                                                              </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="height:20px;">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                                                    <tr>
                                                                        <td style="height:40px;">&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding:0 35px;">
                                                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                                                requested to reset your password</h1>
                                                                            <span
                                                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                                                We cannot simply send you your old password. A unique link to reset your
                                                                                password has been generated for you. To reset your password, click the
                                                                                following link and follow the instructions.
                                                                            </p>
                                                                            <a href="${EMAIL}/company/resetpassword/${token}"
                                                                                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                                                                Password</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="height:40px;">&nbsp;</td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        <tr>
                                                            <td style="height:20px;">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align:center;">
                                                                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>reviewnet.herokuapp.com</strong></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="height:80px;">&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--/100% body table-->
                                    </body>
                                    
                                    </html>
                                    `
                                })
                                res.json({ message: "Check Your Email" })
                            })
                        }
                        else {
                            return res.status(400).json({ error: "You are not verified!" })
                        }
                    }
                })
                .catch(err => next(err))
        }
    })
})

CompanyRouter.post('/newpassword', (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    Companies.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then(company => {
            if (!company) {
                res.status(404).json({ error: "Try Again. Session Expired" })
            }
            else {
                bcrypt.hash(newPassword, 12).then(hasedpassword => {
                    company.password = hasedpassword
                    company.resetToken = undefined
                    company.expireToken = undefined
                    company.save().then((savedUser) => {
                        res.json({ message: "password Updated." })
                    })
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = CompanyRouter;
