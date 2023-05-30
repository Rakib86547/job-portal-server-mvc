const { createEducationService, getEducationService, updateEducationService, deleteEducationService } = require("../services/education.service");

exports.createEducation = async (req, res, next) => {
    try {
        const data = req.body;
        const education = await createEducationService(data);
        res.status(200).send({
            status: 'Success',
            data: education
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.getEducation = async (req, res, next) => {
    try {
        const email = req.params.email;
        const education = await getEducationService(email);
        res.status(200).send({
            status: 'Success',
            data: education
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}

// ---- update education ----
exports.updateEducation = async (req, res, next) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const education = await updateEducationService(id, data);
        console.log(education)
        res.status(200).send({
            status: 'Success',
            data: education
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
// ---- delete education ----
exports.deleteEducation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const education = await deleteEducationService(id);
        res.status(200).send({
            status: 'Success',
            data: education
        })
        console.log(education)
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}