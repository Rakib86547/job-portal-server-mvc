const { getJobsService, createJobsService, getJobsByCategoryService, getJobsDetailsByIdService } = require("../services/jobs.service")

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
        const category  = req.params.category        
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
        const id  = req.params.id
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