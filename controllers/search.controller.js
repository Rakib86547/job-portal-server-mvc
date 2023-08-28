const { getSearchJobsService } = require("../services/search.service");

exports.getSearchJobs = async (req, res) => {
    try {
        const { title, location } = req.query;
        const result = await getSearchJobsService(title, location);
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