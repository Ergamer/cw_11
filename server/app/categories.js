const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Category = require('../models/Category');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = (db) => {
    router.get('/', (req, res) => {
        Category.find()
            .then(categories => res.send(categories))
            .catch(() => res.sendStatus(500));
    });

    return router;
};

module.exports = createRouter;