'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const datalist = await this.service.user.findAll();
    console.log(datalist)
    this.ctx.body = 'datalist';
  }
}

module.exports = HomeController;
