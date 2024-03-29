const Jobs = require("../models/Jobs");
const { getCompanyInfoService } = require("../services/companyInfo.service");
const { 
    getJobsService, 
    createJobsService, 
    getJobsByCategoryService, 
    getJobsDetailsByIdService, 
    createApplyService, 
    existApplyUserService, 
    getAppliedJobsService, 
    createQuestionsService, 
    getQuestionsService, 
    createRipleyService, 
    getRipleyService, 
    getHrJobsService, 
    deleteJobService, 
    getManageJobService, 
    deleteApplierService, 
    getAllApplierService, 
    getHrTotalJobsService, 
    getAllAppliersService, 
    getTotalJobsService, 
    getAllJobsService, 
    getTodayJobsService, 
    getTotalAllJobsService, 
    getTotalJobsCountsService} = require("../services/jobs.service")

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
        const id = req.params.id
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
    // let page = 3
    // let limit = 10;
    // let skip = (3 - 1) * 10;

    try {
        let page = parseInt(req.params.page) || 1;
        let limit = parseInt(req.params.limit) || 8;
        let skip = (page - 1) * limit;
        const email = req.params.email;
        const jobs = await getHrJobsService(email, skip, limit);
        const totalsJobs = await getHrTotalJobsService(email)
        res.json({
            status: 'Success',
            total: totalsJobs.length,
            data: jobs
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.getAllJobs = async (req, res) => {
    try {
        let page = parseInt(req.params.page) || 1;
        let limit = parseInt(req.params.limit) || 12;
        let skip = (page - 1) * limit;
        const jobs = await getAllJobsService(skip, limit);
        const totalsJobs = await getTotalJobsService();
        res.json({
            status: 'Success',
            total: totalsJobs.length,
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

exports.deleteApplier = async (req, res) => {
    try {
        const id = req.params.id;
        const email = req.params.email;
        const result = await deleteApplierService(email, id);
        res.status(200).send({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.getAllApplier = async (req, res) => {
    try {
        let page = parseInt(req.params.page) || 1;
        let limit = parseInt(req.params.limit) || 8;
        let skip = (page - 1) * limit;
        const email = req.params.email;
        const allApplier = await getAllAppliersService(email);
        const totalApplier = allApplier?.map(apply => apply.applicants);
        const result = await getAllApplierService(email, skip, limit);
        const applier = result.map(apply => apply.applicants);
        res.status(200).send({
            status: "Success",
            total: totalApplier?.length,
            data: applier
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.getTodayJobs = async (req, res) => {
    try {
        const todayDate = new Date();
        const result = await getTodayJobsService(todayDate);
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

exports.getTotalJobsCounts = async (req, res) => {
    try {
        const result = await getTotalJobsCountsService();
        res.status(200).send({
            status: "Success",
            data: result,            
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}