const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: 'files/',
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() + 1E9)
        cb(null, file.originalname);
    }
})


const imageUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportImage = /pdf/;
        const extension = path.extname(file.originalname);
        if (supportImage.test(extension)) {
            cb(null, true)
        } else {
            cb(new Error('Image must be pdf'))
        }
    },
    // limits: {
    //     fieldSize: 5000000
    // }
});

// const fileUploads = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         if(file.mimetype.split('/')[1] === 'pdf'){
//             cb(null, true)
//         } else{
//             eb(new Error('Not a PDF File'))
//         }
//     }
// })

module.exports = imageUpload