// 基于fs模块读写文件内容
// 1.加载fs模块对象
// 2.写入文件内容
// 3.读取文件内容

const fs = require('fs')
//引入path 模块对象
const path = require('path')
console.log(__dirname)

// fs.writeFile('./test.txt','hello,world,node.js',(err) => {
//     if(err) console.log(err)
//     else console.log('写入成功')
// })
fs.readFile(path.join(__dirname,'./test.txt'),(err,data) => {
    if(err) console.log(err)
    //data是buffer 16进制数据流对象
    else console.log(data.toString())
})
