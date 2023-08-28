const Jobs = require("../models/Jobs")

exports.getSearchJobsService = async (title, location) => {
    console.log(title, location)
    if (title !== undefined) {
        const result = await Jobs.find({
            "$or": [
                { position: { $regex: title } },
            ]
        });
        return result
    }
    else if (location !== undefined) {
        const result = await Jobs.find({
            "$or": [
                { location: { $regex: location } },
            ]
        });
        return result
    }
}