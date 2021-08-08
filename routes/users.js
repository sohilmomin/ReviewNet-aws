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
const Users = require('../models/userModel');
const authenticate = require('../routes/authenticate');
const { Router } = require('express');
const { Http2ServerRequest } = require('http2');
//var authenticate = require('../authenticate');
var UserRouter = express.Router();
UserRouter.use(bodyParser.json())
const tranporter = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key: SENDGRID_API
  }
}))
UserRouter.post('/signup', (req, res) => {
  const { name, email, password, pic, fullname } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the  fields" })
  }
  else {
    Users.findOne({ $or: [{ email: email }, { name: name }] })
      .then((savedUser) => {
        if (savedUser) {
          return res.status(422).json({ error: "User with same name or email already exist" })
        }
        else {
          bcrypt.hash(password, 12)
            .then((hasedpassword => {
              const user = new Users({ name, email, password: hasedpassword, pic: pic, fullname: fullname })
              user.save()
                .then((user) => {
                  // tranporter.sendMail({
                  //     to: user.email,
                  //     from: "201701227@daiict.ac.in",
                  //     subject: "signup  Success",
                  //     html: "<h1>Welcome To InstaClone</h1>"
                  // })
                  res.json({ message: "Signed Up Successfully." })
                })
                .catch(err => {
                  console.log(err)
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

UserRouter.get("/userdata", authenticate.VerifyUser, (req, res, next) => {
  req.user.password = null
  const { authorization } = req.headers
  const token = authorization.replace("Bearer ", "")
  const { _id, name, email, fullname, pic } = req.user
  res.json({ token, user: { _id, name, email, fullname, pic } })
})

UserRouter.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please provide email or password" })
  }
  else {
    Users.findOne({ email: email })
      .then((saveduser) => {
        if (!saveduser) {
          return res.status(422).json({ error: "Invalid Email or password" })
        }
        else {
          bcrypt.compare(password, saveduser.password)
            .then(doMatch => {
              if (doMatch) {
                const token = jwt.sign({ _id: saveduser._id }, JWT_SECRET)
                const { _id, name, email, fullname, pic } = saveduser
                res.json({ token, user: { _id, name, email, fullname, pic } })
                //res.json({ message: "successfully signed in" })
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




UserRouter.post("/resetpassword", (req, res) => {
  crypto.randomBytes(32, (err, Buffer) => {
    if (err) {
      console.log(err)
    }
    else {
      const token = Buffer.toString("hex")
      Users.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            console.log("Reached at server")
            return res.status(404).json({ error: "Email not exist" })
          }
          else {
            user.resetToken = token,
              user.expireToken = Date.now() + 3600000
            user.save().then((result) => {
              tranporter.sendMail({
                to: user.email,
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
                                                        <a href="${EMAIL}/users/resetpassword/${token}"
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
        })
    }
  })
})

UserRouter.post('/newpassword', (req, res) => {
  const newPassword = req.body.password
  const sentToken = req.body.token
  Users.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then(user => {
      if (!user) {
        res.status(404).json({ error: "Try Again. Session Expired" })
      }
      else {
        bcrypt.hash(newPassword, 12).then(hasedpassword => {
          user.password = hasedpassword
          user.resetToken = undefined
          user.expireToken = undefined
          user.save().then((savedUser) => {
            res.json({ message: "password Updated." })
          })
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
})

// UserRouter.post("/resetpassword", (req, res) => {
//   crypto.randomBytes(32, (err, Buffer) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       const token = Buffer.toString("hex")
//       User.findOne({ email: req.body.email })
//         .then(user => {
//           if (!user) {
//             return res.status(404).json({ error: "Email not exist" })
//           }
//           else {
//             user.resetToken = token,
//               user.expireToken = Date.now() + 3600000
//             user.save().then((result) => {
//               tranporter.sendMail({
//                 to: user.email,
//                 from: "201701227@daiict.ac.in",
//                 subject: "Password reset",
//                 html: `
//                               <p>You requested for password Reset</p>
//                               <h6>Click on this <a href="${EMAIL}/reset/${token}" >link</a> to reset password</h6>
//                           `
//               })
//               res.json({ message: "Check Your Email" })
//             })
//           }
//         })
//     }
//   })
// })

// UserRouter.post('/newpassword', (req, res) => {
//   const newPassword = req.body.password
//   const sentToken = req.body.token
//   User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
//     .then(user => {
//       if (!user) {
//         res.status(404).json({ error: "Try Again. Session Expired" })
//       }
//       else {
//         bcrypt.hash(newPassword, 12).then(hasedpassword => {
//           user.password = hasedpassword
//           user.resetToken = undefined
//           user.expireToken = undefined
//           user.save().then((savedUser) => {
//             res.json({ message: "password Updated." })
//           })
//         })
//       }
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })


// UserRouter.route('/signup').post((req, res, next) => {
//   const newUser = new Users({ username: req.body.username, company: req.body.company, firstname: req.body.firstname, lastname: req.body.lastname })
//   Users.register(newUser, req.body.password, (err, user) => {
//     if (err) {
//       res.statusCode = 500
//       res.setHeader('Content-Type', 'application/json')
//       res.json({ err: err })
//     }
//     else {
//       passport.authenticate('local')(req, res, () => {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json')
//         res.json({ status: 'Registration Successful', success: true })
//       })
//     }
//   })
// })

// UserRouter.route('/login').post(passport.authenticate('local'), (req, res, next) => {
//   var token = authenticate.getToken({ _id: req.user._id });
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({ success: true, token: token, status: 'You are successfully logged in!' });
// })

// UserRouter.get('/logout', (req, res, next) => {
//   if (req.session) {
//     req.session.destroy()
//     res.clearCookie('session-id')
//     res.send('Successfully logged Out')
//     res.redirect('/')
//   }
//   else {
//     const err = new Error("You are not loggedIn")
//     err.status = 403
//     return next(err)
//   }
// })

// UserRouter.route('/').get((req, res, next) => {
//   console.log('Get from users')
//   Users.find()
//     .then(users => {
//       res.send(users)
//       console.log(users)
//     })
//     .catch(err => next(err))
// })
//   .post((req, res, next) => {
//     console.log('posted user')
//     Users.create(req.body)
//       .then(user => {
//         res.send(user)
//         console.log('User Added')
//       })
//       .catch(err => next(err))
//   })

module.exports = UserRouter;
