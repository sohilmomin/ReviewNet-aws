const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        default: ''
    },
    tags: [{
        type: String,
        default: ''
    }],
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    unlikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema) 