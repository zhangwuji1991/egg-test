'use strict';
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: String,
        //密码
        password: String,
        //是否管理员
        isAdmin: {
            type: Boolean,
            default: false
        },
        //头像
        headImg: {
            type: String,
            default: ''
        },
        //注册日期
        registerDate:{
            type: String,
            default:''
        }
    });
    return mongoose.model('User', UserSchema);
}