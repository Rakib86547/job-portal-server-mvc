const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();

exports.verifyToken = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const authHeader = req.headers.authorization;;
        if (!authHeader) {
            return res.status(401).send({ status: "Fail", message: "Unauthorized access" })
        }

        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (error, decoded) {
            if (error) {
                return res.status(403).send({ status: "Fail", message: "forbidden access" });
            }
            req.decoded = decoded
            next()
        })
    } catch (error) {
        res.status(400).send({ status: "fail", message: error.message })
    }
}