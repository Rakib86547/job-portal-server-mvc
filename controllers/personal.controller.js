const { createPersonalInfoService, getPersonalInfoService } = require("../services/personal.service");

exports.createPersonalInfo = async (req, res) => {
    try {
        const email = req.body.email;
        const info = req.body;
        const personal = await createPersonalInfoService(email, info);
        res.status(200).send({
            status: "Success",
            data: personal
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}
exports.getPersonalInfo = async (req, res, next) => {
    try {
        const email = req.params.email;
        const personal = await getPersonalInfoService(email);
        res.status(200).send({
            status: "Success",
            data: personal
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}