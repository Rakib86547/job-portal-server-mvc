const { createWorkService, getWorkService, updateWorkService, deleteWorkService } = require("../services/work.service");

exports.createWork = async (req, res, next) => {
    try {
        const data = req.body;
        const work = await createWorkService(data);
        console.log(work)
        res.status(200).send({
            status: 'Success',
            data: work
        })
    } catch (error) {
        res.status(200).send({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.getWork = async (req, res, next) => {
    try {
        const email = req.params.email;
        const work = await getWorkService(email);
        res.status(200).send({
            status: 'Success',
            data: work
        })
    } catch (error) {
        res.status(200).send({
            status: 'Fail',
            message: error.message
        })
    }
}


// ---- update work ----
exports.updateWork = async (req, res, next) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const work = await updateWorkService(id, data);
        console.log(work)
        res.status(200).send({
            status: 'Success',
            data: work
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
// ---- delete work ----
exports.deleteWork = async (req, res, next) => {
    try {
        const id = req.params.id;
        const work = await deleteWorkService(id);
        res.status(200).send({
            status: 'Success',
            data: work
        })
        console.log(education)
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}