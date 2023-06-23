const express = require('express');
const routerUser = express.Router();
const { login, register, list } = require('../controller/userController');
const { body, validationResult } = require('express-validator');
const validator = require('../middleware/validator/userValidator');
const { verifyToken } = require('../utils/jwt');

routerUser
    .get('/logins', validator.login, login)
    .post('/registers', validator.register, register)
    .get('/lists', verifyToken, list);

module.exports = routerUser;

// 在路由中加入对应的方法，编写校验规则和登录业务逻辑
