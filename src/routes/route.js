const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
// const valid = require('../middleware/valid');
// const authenti = require('../middleware/authentication')
const productController = require("../controller/vacineController");
const dose = require("../controller/dose");
const authenti = require('../Middleware/authentication')
// const orderController = require("../Controller/orderController")

// User Api
router.post('/register', userController.createUser)
router.post('/login', userController.userLogin)


// type of vachine
router.post('/vachine', productController.createvc)


//register dose 
router.post('/dose/:userId', authenti.authentication , dose.cartcreate)
router.put('/dosse/:userId' , authenti.authentication , dose.putapi)





module.exports = router;