const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    isPresent: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)