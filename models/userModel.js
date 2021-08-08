const mongoose = require('mongoose');
const Schema = mongoose.Schema

var User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/sohil/image/upload/v1599484962/default_pic_boplg1.png"
    },
    resetToken: {
        type: String
    },
    expireToken: {
        type: Date
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    fullname: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User)

