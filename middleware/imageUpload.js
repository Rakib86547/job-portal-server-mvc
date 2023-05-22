const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: 'images/',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() + 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const imageUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportImage = /png|jpg|jpeg/;
        const extension = path.extname(file.originalname);
        if (supportImage.test(extension)) {
            cb(null, true)
        } else {
            cb(new Error('Image must be png/jpg/jpeg'))
        }
    },
    limits: {
        fieldSize: 5000000
    }
});

module.exports = imageUpload