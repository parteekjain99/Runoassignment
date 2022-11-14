const userModel = require("../Model/userModel");
const dose = require('../Model/dose');
const jwt = require("jsonwebtoken");



const cartcreate = async function (req, res) {
  
        const UserId = req.params.userId
        const requestBody = req.body;
        const { userId,dose1,dose2 } = requestBody
        let token = req.userId;
      //Go valid.js for validation
        const findUser = await userModel.findById({ _id: UserId })
        
        if (!findUser) {
            return res.status(400).send({ status: false, message: `User doesn't exist by ${UserId}` })
        }

        // Authentication & authorization
        if (findUser._id.toString() !== token) {
            res.status(401).send({ status: false, message: `Unauthorized access! User's info doesn't match` });
            return
        }

        // const finddose = await productModel.findOne({ _id: productId, isDeleted: false })
        // console.log(findProduct)
        
        // if (!findProduct) {
        //     return res.status(400).send({ status: false, message: `Product doesn't exist by ${productId}` })
        // }
       
        const findCartOfUser = await dose.findOne({ userId: UserId })
        console.log(findCartOfUser)
        //finding cart related to user.
          //  cart exist for user
          // if not
        if (!findCartOfUser) {
        
            //destructuring for the response body.
            let cartData = {
                userId: userId,
                dose1:dose1,
                dose2:dose2
            }
           
            const createCart = await dose.create(cartData)
           
            return res.status(201).send({ status: true, message: `Cart created successfully`, data: createCart })
        }

    }


    const putapi = async function(req, res) {
        const requestBody = req.body
        const {userId ,dose2} = requestBody
        let updateOrder = await dose.findOneAndUpdate({ userId: userId }, { dose2: dose2 }, { new: true })
        res.status(200).send({ status: true, msg: 'sucesfully updated', data: updateOrder })  
    }


    module.exports = {cartcreate, putapi}