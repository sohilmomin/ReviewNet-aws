const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    catogery: [{
        type: String,
        default: ''
    }],
    subCatogery: [{
        type: String,
        default: ''
    }],
    pic: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema) 