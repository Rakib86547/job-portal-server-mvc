const { fileUploadService, getFileService, deleteFileService } = require("../services/files.service");

exports.fileUpload = async (req, res, next) => {
    try {
        const pdfFile = req.file
        const email = req.body.email
        const data = {
            filename: pdfFile.filename,
            path: pdfFile.path,
            originalname: pdfFile.originalname,
            email: email
        }
        const uploadFile = await fileUploadService(data, email);
        res.status(200).send({
            status: "Success",
            data: uploadFile
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.getFile = async (req, res, next) => {
    try {
        const email = req.params.email;
        const getFile = await getFileService(email);
        res.status(200).send({
            status: "Success",
            data: getFile
        })

    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.deleteFile = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteFile = await deleteFileService(id);
        res.status(200).send({
            status: "Success",
            data: deleteFile
        })

    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: error.message
        })
    }
}