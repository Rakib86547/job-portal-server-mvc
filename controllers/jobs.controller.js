const { getJobsService, createJobsService, getJobsByCategoryService, getJobsDetailsByIdService, createApplyService, existApplyUserService, getAppliedJobsService } = require("../services/jobs.service")

exports.getJobs = async (req, res, next) => {
    try {
        const jobs = await getJobsService();
        res.status(200).send({
            statue: "Success",
            data: jobs
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }
}
exports.getJobsByCategory = async (req, res, next) => {
    try {
        const category = req.params.category
        const jobs = await getJobsByCategoryService(category);
        res.status(200).send({
            statue: "Success",
            data: jobs
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }
}
exports.getJobsDetailsById = async (req, res, next) => {
    try {
        console.log('params: ', req.params.id)
        const id = req.params.id
        console.log('controller', id)
        const jobs = await getJobsDetailsByIdService(id);
        res.status(200).send({
            statue: "Success",
            data: jobs
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }
}

exports.createJobs = async (req, res, next) => {
    try {
        const jobs = await createJobsService(req.body);
        res.status(200).send({
            statue: "Success",
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }
}

exports.createApply = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const existApply = await existApplyUserService(id)

        existApply.applicants.map(existData => {
            if (existData.email === data.email) {
                return res.status(400).send({
                    status: "Fail",
                    message: 'You have already apply for this job'
                })
            }
        })
        if (id) {
            const apply = await createApplyService(id, data);
            return res.status(200).send({
                status: "Success",
                data: apply
            })
        }

    } catch (error) {
    //    next(error)
    }
}
exports.getAppliedJobs = async (req, res) => {
    try {
        const email = req.params.email;
        const jobs = await getAppliedJobsService(email);
        console.log('applied job',jobs)
        res.status(200).send({
            status: 'Success',
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}