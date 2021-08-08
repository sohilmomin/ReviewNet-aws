const mongoose = require('mongoose');
const Schema = mongoose.Schema

var Company = new Schema({
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
    fullname: {
        type: String,
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', Company)

