const File = require("../models/File")

exports.fileUploadService = async (pdfFile) => {
    const files = await File.create(pdfFile);
    return files
}