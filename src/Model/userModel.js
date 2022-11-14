const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        fname: {type:String, required:true, trim:true},//me, PhoneNumber, Age, Pincode, Aadhar No)
        lname: {type:String, required:true, trim:true},
        phone: {type:String, unique:true, required:true,
                validate: {
                    validator: function (phone) {
                        return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phone)
                    }, message: 'Please fill a valid mobile number', isAsync: false
                }},
        password: {type: String, required:true,},
        age: {type:Number, required:true}, 
        pincode: {type:Number, unique:true, required:true},
        adhar: {type:Number, unique:true, required:true}, 
        },{timestamps:true})

        module.exports=mongoose.model('User',userSchema)