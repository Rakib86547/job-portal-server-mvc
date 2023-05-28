const File = require("../models/File")

exports.fileUploadService = async (data, email) => {
    const files = await File.updateOne({ email: email }, { $set: data }, { upsert: true });
    return files
}
exports.getFileService = async (email) => {
    const files = await File.findOne({ email: email });
    return files
}
exports.deleteFileService = async (id) => {
    const deleteFile = await File.deleteOne({ _id: id });
    return deleteFile
}