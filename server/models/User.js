const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nanoid = require('nanoid');

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async function (value) {
                if (!this.isModified('username')) return true;

                const user  = await User.findOne({username: value});
                if (user) throw new Error('User already exist!');
                return true;
            },
            message: 'User already exists. Select another username!'
        }
    },
    password: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    token: String
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
    }
});

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
    this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;