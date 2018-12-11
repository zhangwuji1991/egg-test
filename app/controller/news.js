
'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

  async index() {
    var msg = 'ejs';
    var list = ['2233','eeee']
    await this.ctx.render('news',{
        mag: msg,
        list
    })
  }

  async content() {
    //获取get传值 ctx.query
    var query = this.ctx
    const datalist = await this.service.user.findAll();
    // 返回前端数据
    this.ctx.body = {
      code: 0,
      msg: '获取成功',
      data: datalist
    }
  }
  
  async other() {
    return {
        list: [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
      }
    }

}


module.exports = NewsController;
