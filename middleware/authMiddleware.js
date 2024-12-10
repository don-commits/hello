const jwt = require("jsonwebtoken")
require("dotenv").config()
const userModel = require("../models/userModel")
const verifierModel = require("../models/verifierModel")
const app_constants = require("../constants/app.json")



exports.verifyToken = async (req, res, next) => {
    const {authorization} = req.headers 
    if (!authorization) {
        return response.json({
           success : 0,
           message : "Provide right token"
        })
    }

    const token = authorization.split(' ')[1]
    // console.log(token);
    const verify_token = jwt.verify(token, process.env.JWT_SECRET_KEY)
    // console.log(verify_token);
    if (!verify_token) {
        return response.json({
            success : 0,
            message : "Provide right token"
         })
    }
    const {id} = verify_token
    const user = await userModel.findById(id)
    if (token !== user.token) {
        return response.json({ 
            success: 0, 
            status: app_constants.BAD_REQUEST, 
            message: 'Invalid Token!', result: {} })
    }
    if (!user) {
        return res.json({ 
            success: 0, 
            status: app_constants.BAD_REQUEST, 
            message: 'User does not exist!', result: {} })
    }
    req.user = user
    next()
}


exports.verifyVerifierToken = async (req, res, next) => {
    const {authorization} = req.headers 
    if (!authorization) {
        return response.json({
           success : 0,
           message : "Provide right token"
        })
    }

    const token = authorization.split(' ')[1]
    // console.log(token);
    const verify_token = jwt.verify(token, process.env.JWT_SECRET_KEY)
    // console.log(verify_token);
    if (!verify_token) {
        return response.json({
            success : 0,
            message : "Provide right token"
         })
    }
    const {id} = verify_token
    const user = await verifierModel.findById(id)
    if (token !== user.token) {
        return response.json({ 
            success: 0, 
            status: app_constants.BAD_REQUEST, 
            message: 'Invalid Token!', result: {} })
    }
    if (!user) {
        return res.json({ 
            success: 0, 
            status: app_constants.BAD_REQUEST, 
            message: 'User does not exist!', result: {} })
    }
    req.user = user
    next()
}