const Jobs = require("../models/Jobs")

exports.getSearchJobsService = async (keyword, location) => {
    // if (title !== undefined) {
    //     const result = await Jobs.find({
    //         "$or": [
    //             { position: { $regex: title } },
    //         ]
    //     });
    //     return result
    // }
    // else if (location !== undefined) {
    //     const result = await Jobs.find({
    //         "$or": [
    //             { location: { $regex: location } },
    //         ]
    //     });
    //     return result
    // }
    if (keyword !== undefined ) {
        const result = await Jobs.find({
            position: { $regex: new RegExp(`^${keyword}`, 'i') }
        });
        return result
    }
    else if ( location !== undefined) {
        const result = await Jobs.find({
            location: { $regex: new RegExp(`^${location}`, 'i') }
        });
        return result
    }   
}