
//加载http模块 创建web对象
const http = require('http')
//监听requst 请求事件 设置相应头和相应体
const server = http.createServer()
server.on('request',(req,res) => {
    //设置相应头 内容类型 普通文本以及中文编码格式
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    //设置相应体内容 结束本次请求和相应
    res.end('欢迎使用node.js和html模块创建的web服务')
})
//配置端口号并启动进程
server.listen(3000,() => {
    console.log('web服务启动成功')
})