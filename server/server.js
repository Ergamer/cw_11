const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const users = require('./app/users');
const items = require('./app/items');
const categories = require('./app/categories');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongoose connected!');

    app.use('/items', items());
    app.use('/users', users());
    app.use('/categories', categories());

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    })
});