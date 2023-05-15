exports.errorHandler = async (error, req, res, next) => {
    res.status(500).send({
        status: "Fail",
        message: "Something went wrong",
        error: error.message
    })
}