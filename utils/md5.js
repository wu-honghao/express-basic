// 内置加密模块
const crypto = require('crypto');

module.exports = str => {
    return crypto
        .createHash('md5')
        .update('by' + str)
        .digest('hex');
};
