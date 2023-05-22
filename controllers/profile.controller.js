const { createProfileService, getUpdateUserService } = require("../services/profile.service")

exports.createProfile = async (req, res, next) => {
    try {
        // console.log('token: >', req)
        const email = req.params.email;
        const profileInfo = req.body;
        console.log('profile: ', profileInfo)
        const profile = await createProfileService(profileInfo, email);
        res.status(200).send({
            status: 'Success',
            data: profile
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
        // next(error)
    }
}
exports.getUpdateUser = async (req, res, next) => {
    try {       
        const email = req.params.email
        const profile = await getUpdateUserService(email);
        res.status(200).send({
            status: 'Success',
            data: profile
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
        // next(error)
    }
}