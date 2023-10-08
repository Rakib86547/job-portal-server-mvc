const { getSearchJobsService } = require("../services/search.service");

exports.getSearchJobs = async (req, res) => {
    try {
        const { keyword, location } = req.query;
            const result = await getSearchJobsService(keyword, location);
            res.status(200).send({
                status: 'Success',
                total: result.length,
                data: result
            })        
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}