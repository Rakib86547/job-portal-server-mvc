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
exports.getPersonalInfo = async (req, res) => {
    try {
        const email = req.body.email;
        const personal = await getPersonalInfoService(email);
        console.log(personal)
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