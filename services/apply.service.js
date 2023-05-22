const { isValidObjectId } = require("mongoose")
const Jobs = require("../models/Jobs")

// exports.createApplyService = async (id, data) => {
//     console.log('id>> ', id);
//     console.log('service data', data)
//     const apply = await Jobs.updateOne(
//         { _id: id },
//         {
//             $push: { applicants: data  }
//         },
//         // { upsert: true },
//     )
//     return apply
// }