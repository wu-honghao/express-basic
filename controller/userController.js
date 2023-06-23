const { User } = require('../model/index');
const { createToken } = require('../utils/jwt');

// 用户登录
exports.login = async (req, res) => {
    // 客户端数据验证
    // 链接数据库查询
    let dbBack = await User.findOne(req.body);
    if (!dbBack) {
        res.status(402).json({ error: '邮箱或密码错误' });
    }
    try {
        dbBack = dbBack.toJSON();
        dbBack.token = await createToken(dbBack);
        console.log(dbBack);
        res.status(200).json(dbBack);
    } catch (e) {
        console.log(e);
        res.status(402).json({ error: e });
    }
};

// 用户注册
exports.register = async (req, res) => {
    const userModel = new User(req.body);
    const dbBack = await userModel.save();
    user = dbBack.toJSON();
    delete user.password;
    res.status(201).json(user);
};

exports.list = (req, res) => {
    res.send('/user-list');
};

exports.delete = async (req, res) => {};
