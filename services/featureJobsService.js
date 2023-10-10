const Jobs = require("../models/Jobs")

exports.getFeatureJobsService = async () => {
    const result = await Jobs.find().limit(9);
    return result
}
// exports.getTotalJobsService = async () => {
//     const result = await Jobs.find();
//     return result
// }
// exports.getAllFeatureJobsService = async (skip, limit) => {
//     const result = await Jobs.find().skip(skip).limit(limit);
//     return result
// }
