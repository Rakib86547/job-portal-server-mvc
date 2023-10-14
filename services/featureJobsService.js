const Jobs = require("../models/Jobs")

exports.getFeatureJobsService = async () => {
    const result = await Jobs.find().limit(9);
    return result
}

exports.getTotalAllJobsService = async () => {
    const result = await Jobs.find();
    return result
}
exports.getTodayJobsService = async () => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const result = await Jobs.aggregate([{
        $match: {
            createdAt: {
                $gte: startOfToday,
                $lt: endOfToday
            }
        }
    }])
    return result
}
