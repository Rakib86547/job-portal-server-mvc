exports.errorHandler = async (error, req, res, next) => {
    // console.log('error handler: ', error)
    if (error) {
        res.status(500).send({
            status: "Fail",
            message: "Something went wrong",
            error: error.message
        });
    }
    // next()
}