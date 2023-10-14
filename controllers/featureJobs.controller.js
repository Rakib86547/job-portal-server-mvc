const { getFeatureJobsService, getAllFeatureJobsService, getTotalJobsService, getTotalAllJobsService, getTodayJobsService } = require("../services/featureJobsService");

exports.getFeatureJobs = async (req, res) => {
    try {
        const result = await getFeatureJobsService();
        res.status(200).send({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.getTotalAllJobs = async (req, res) => {
    try {
        const result = await getTotalAllJobsService();
        res.status(200).send({
            status: "Success",
            data: result?.length
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.getTodayJobs = async (req, res) => {
    try {
        const result = await getTodayJobsService();
        res.status(200).send({
            status: "Success",
            data: result?.length
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}