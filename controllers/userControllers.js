const app_constant = require("../constants/app.json")
const userServices = require("../services/userServices")
const validationHelper = require("../helpers/validation")

exports.userSignup = async (req, res) => {
    try {
        const required_fields = ["user_name", "email", "password"];
        const validation = validationHelper.validation(
            required_fields,
            req.body
        );
        if (Object.keys(validation).length) {
            return res.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }
        const validEmail = validationHelper.validEmail(req.body.email)

        if (!validEmail) {
            return res.json({
                success: 0,
                status: app_constant.BAD_REQUEST,
                message: "Enter a valid Email",
                result: {},
            })
        }

        const addUser = await userServices.userSignup(req.body);

        return res.json(addUser);
    }
    catch (error) {
        return res.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const required_fields = ["email", "password"];
        const validation = validationHelper.validation(
            required_fields,
            req.body
        );
        if (Object.keys(validation).length) {
            return res.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }

        const validEmail = validationHelper.validEmail(req.body.email)

        if (!validEmail) {
            return res.json({
                success: 0,
                status: app_constant.BAD_REQUEST,
                message: "Enter a valid Email",
                result: {},
            })
        }

        const loginUser = await userServices.userLogin(req.body)

        return res.json(loginUser)


    }
    catch (error) {
        return res.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        })
    }
}

exports.userLogout = async (req, res) => {
    try {
         const data = await userServices.userLogout(req.user)

         return res.json(data)
    }
    catch(error) {
        return res.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        })
    }
}