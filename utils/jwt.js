// 基本使用
const { json } = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { uuid } = require('../config/config.default');
const { promisify } = require('util');
// 改造城可以使用 promise 链的方法
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports.createToken = async userInfo => {
    const token = await tojwt(userInfo, uuid);
    return token;
};

module.exports.verifyToken = async (req, res, next) => {
    let token = req.headers.authorization;
    token = token ? token.split('Bearer ')[1] : null;

    if (!token) {
        res.status(402).json({ error: '请传入token' });
        return;
    }
    try {
        let userInfo = verify(token, uuid);
        next();
    } catch (e) {
        console.log(e);
        res.status(402).json({ error: 'token无效' });
    }
};
