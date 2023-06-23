const mongoose = require('mongoose');
const md5 = require('../utils/md5');
const baseModel = require('./baseModel');

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    // select 剔除字段
    password: { type: String, require: true, set: value => md5(value), select: 'false' },
    phone: { type: String, require: true },
    avadar: { type: String, require: true, default: null },
    ...baseModel,
});

module.exports = userSchema;
