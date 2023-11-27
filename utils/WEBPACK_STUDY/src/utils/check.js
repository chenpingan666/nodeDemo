//封装验证手机号长度 和验证码长度
export const checkPhone = phone => phone.length === 11
export const checkCode = code => code.length === 6