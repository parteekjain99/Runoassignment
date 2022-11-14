const vacineModel = require('../Model/vacineModel');

const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}




const createvc = async function(req, res) {
    try {

    let data = req.body
 
    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, message: "body is required" })
    }


    if (!isValid(data.title)) {
        return res.status(400).send({ status: false, msg: "Enter title " })
    }

    if (!isValid(data.description)) {
        return res.status(400).send({ status: false, msg: "Enter description " })
    }
    
   
    if (!isValid(data.price)) {
        return res.status(400).send({ status: false, msg: "Enter phone Number " })
    }

    // //create vacine--------------------------------------------------------------------------------------------------
    const newVacine = await vacineModel.create(data)
    return res.status(201).send({ status: true, message: "vaccine created successfully", data: newVacine })

}
catch (error) {
    return res.status(500).send(error.message)
}
}



module.exports = { createvc }