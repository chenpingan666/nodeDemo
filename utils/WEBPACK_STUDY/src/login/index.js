// 目标： 体验webpack 打包过程
//准备项目和源代码
//导入request模块  和 alter 模块
import myAxios from "../utils/request.js"
import { myAlert } from "../utils/alert.js"
import { checkPhone, checkCode } from "../utils/check.js";
console.log(checkPhone(12456789456))
console.log(checkCode(212456))

//准备webpack打包环境
//运行自定义命令

//编写核心js代码
document.querySelector('.btn').addEventListener('click', () => {
    const phone = document.querySelector('.login-form [name=mobile]').value
    const code = document.getElementsByName("code")[0].value
    


    //判断
    if (!checkPhone(phone)) {
        myAlert(false,'手机号必须为11位')
        console.log('手机号必须为11位')
        return
    }
    if (!checkCode(code)) {
        myAlert(false,'验证码必需为6位')
        console.log('验证码必需为6位')
        return
    }
    //目标十：调用 myAxios 完成登录验证
    myAxios({
        url: '/v1_0/authorizations',
        method: 'POST',
        data: {
            mobile: phone,
            code: code
        }
    }).then(() => {
        myAlert(true, '登录成功')
    }
    ).catch(error => {
        myAlert(false, '登录失败')
    })

})


// 目标五 ：打包css代码
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './index.less'

//目标九 ：打包资源模块（图像处理）
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)
console.log('fafa')


