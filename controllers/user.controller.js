const { signupService, getUserByEmailService, getallUserService } = require("../services/user.service");
const { generateToken } = require("../utilitis/token");
// const { sendMailWithGmail } = require("../utilitis/email");

exports.signUp = async (req, res, next) => {
    try {
        const email = req.params.email;
        const userInfo = req.body;        
        const user = await signupService(userInfo, email);

       const token = generateToken(userInfo)
    //    console.log(token)
    //    console.log(user)
        res.status(200).send({
            status: "Success",
            data: user,
            userToken: token
        })
    } catch (error) {
        // res.status(400).send({
        //     status: "Fail",
        //     message: error.message
        // })
        next(error)
    }
}
exports.getUserByEmail = async (req, res, next) => {
    try {
        const email = req.params.email;
        const user = await getUserByEmailService(email);
        const { password: pwd, ...others } = user.toObject();
        res.status(200).send({
            status: "Success",
            data: others
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}
