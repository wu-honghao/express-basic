const mongoose = require('mongoose');
const { dbURL } = require('../config/config.default');
const main = async () => {
    await mongoose.connect(dbURL);
};

main()
    .then(res => {
        console.log('mongo 链接成功');
    })
    .catch(err => {
        console.log(err);
        console.log('mongo 链接失败');
    });

module.exports = {
    User: mongoose.model('User', require('./userModel')),
};
