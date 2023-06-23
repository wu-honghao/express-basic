const express = require('express');
const cors = require('cors');
const mongan = require('morgan');
const userRouter = require('./router/user');
const videoRouter = require('./router/video');

const app = express();
const router = require('./router');

const PORT = process.env.PORT || 3000;

// 挂载统一处理服务端错误中间件
// app.use(errorHandler());

// 数据解析格式
app.use(express.json());
app.use(express.urlencoded());
// 支持跨域
app.use(cors());
// 挂载路由
app.use('/api/v1', router);
// 日志
app.use(mongan('dev'));

// 设置 404 状态码
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('service Error');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
