const { getCompanyInfoService } = require("../services/companyInfo.service");
const { getJobsService, createJobsService, getJobsByCategoryService, getJobsDetailsByIdService, createApplyService, existApplyUserService, getAppliedJobsService, createQuestionsService, getQuestionsService, createRipleyService, getRipleyService, getHrJobsService, deleteJobService, getManageJobService } = require("../services/jobs.service")

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
        const jobInfo = req.body;
        const jobs = await createJobsService(jobInfo);
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


exports.createQuestions = async (req, res) => {
    try {
        const data = req.body;
        const id = data.jobId;
        const questions = await createQuestionsService(id, data);
        res.status(200).send({
            status: 'Success',
            data: questions
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.createRipley = async (req, res) => {
    try {
        const data = req.body;
        const id = data.ripleyJobId;
        console.log('ripley data: ', data)
        const ripley = await createRipleyService(id, data);
        res.status(200).send({
            status: 'Success',
            data: ripley
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}


exports.getQuestions = async (req, res) => {
    try {
        const id = req.params.id
        const questions = await getQuestionsService(id);
        console.log(questions)

        res.status(200).send({
            status: 'Success',
            data: questions.queries
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.getRipley = async (req, res) => {
    try {
        const id = req.params.id
        const ripley = await getRipleyService(id);
        console.log(ripley)

        res.status(200).send({
            status: 'Success',
            data: ripley.replies
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.getHrJobs = async (req, res) => {
    try {
        const email = req.params.email;
        const jobs = await getHrJobsService(email);
        res.status(200).send({
            status: "Success",
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.deleteJob = async (req, res) => {
    try {
        const id = req.params.id;
        const job = await deleteJobService(id);
        console.log('delete job >', job)
        res.status(200).send({
            status: "Success",
            data: job
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.getManageJob = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getManageJobService(id);
        res.status(200).send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}