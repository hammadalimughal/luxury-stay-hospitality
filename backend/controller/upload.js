const fs = require('fs');
const path = require('path');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './views/uploads';
        const fullPath = path.resolve(dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, fullPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "" + Date.now() + '.' + file.originalname.split('.')[1]);
    }
});

const imageFilter = (req, file, cb) => {
    const allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp"
    ];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only (jpeg, png, gif, webp) are allowed!'), false);
    }
};

const uploadImage = multer({
    storage: storage,
    fileFilter: imageFilter
});

module.exports = { uploadImage }