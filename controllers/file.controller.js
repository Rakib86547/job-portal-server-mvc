const { fileUploadService } = require("../services/files.service");

exports.fileUpload = async (req, res, next) => {
    try {
        const pdfFile = req.file
        console.log('file', req.file)
        const file = await fileUploadService(pdfFile);
        res.status(200).send({
            status: "Success",
            data: file
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}