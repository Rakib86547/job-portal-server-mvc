const { getFeatureJobsService, getAllFeatureJobsService, getTotalJobsService } = require("../services/featureJobsService");

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

// exports.getAllFeatureJobs = async (req, res) => {
//     try {
//         let page = parseInt(req.params.page) || 1;
//         let limit = parseInt(req.params.limit) || 8;
//         let skip = (page - 1) * limit;
//         console.log('page', page);
//         console.log('limit', limit)
//         const result = await getAllFeatureJobsService(skip, limit);
//         const totalJobs = await getTotalJobsService();
//         console.log(totalJobs)
//         res.status(200).send({
//             status: 'Success',
//             total: totalJobs.length,
//             data: result
//         })
//     } catch (error) {
//         res.status(400).send({
//             status: 'Fail',
//             message: error.message
//         })
//     }
// }