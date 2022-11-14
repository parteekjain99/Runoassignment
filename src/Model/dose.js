const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({

    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    dose1: {type:Number, required:true}, 
    dose2: {type:Number,  default: null},

  
}, { timestamps: true })

module.exports = mongoose.model('dose', cartSchema)