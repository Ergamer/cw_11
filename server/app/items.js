const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Item = require('../models/Item');

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
        if (req.query.category) {
            Item.find({singer: req.query.category}).populate('displayName')
                .then(results => res.send(results))
                .catch(() => res.sendStatus(500));
        }
    });

    router.post('/', upload.single('image'), (req, res) => {
        const itemData = req.body;

        if (req.file) {
            itemData.image = req.file.filename;
        } else {
            itemData.image = null;
        }

        const item = new Item(itemData);

        item.save()
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error));
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        Item.findOne({_id: req.params.id}, function (err, result) {
            if (err) res.status(404).send(err);
            if (result) res.send(result)
        });

    });

    return router;
};

module.exports = createRouter;