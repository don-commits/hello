const express = require("express")
const userRoute = express.Router()
const userControllers = require("../controllers/userControllers")
const middleware = require("../middleware/authMiddleware")



userRoute.post('/signup', userControllers.userSignup)
userRoute.post('/login', userControllers.userLogin)
userRoute.post('/logout', middleware.verifyToken, userControllers.userLogout)
userRoute.get('/getDocuments', middleware.verifyToken, )






module.exports = userRoute