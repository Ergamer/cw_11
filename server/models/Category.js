const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;