'use strict';

const qs = require('qs');
const mockjs = require('mockjs');
const pathToRegexp = require('path-to-regexp');
var Random = mockjs.Random;
// 数据持久

let infoListData = {};
if (!global.infoListData) {
  const data = mockjs.mock({
    'data': {
      'dataList': [{
        'name':'选项卡',
        'id': 1,
        'title': "全国游泳池检查水质",
        'time': Random.datetime(),
        'contentTitle':"记者徐杰摄影报道",
        'content':"为进一步加强水质监测...",
      },{
        'name':'选项卡',
        'id': 2,
        'title': "全国游泳池检查水质1",
        'time': Random.datetime(),
        'contentTitle':"记者徐杰摄影报道",
        'content':"为进一步加强水质监测....",
      },{
        'name':'选项卡',
        'id': 3,
        'title': "全国游泳池检查水质2",
        'time': Random.datetime(),
        'contentTitle':"记者徐杰摄影报道",
        'content':"为进一步加强水质监测...",
      },{
        'name':'选项卡',
        'id': 4,
        'title': "全国游泳池检查水质3",
        'time': Random.datetime(),
        'contentTitle':"记者徐杰摄影报道",
        'content':"为进一步加强水质监测...",
      }],
      pageNo: 1,
      pageSize: 20,
      pageCount: 20,
      totalCount: 50
    }
  });
  infoListData = data;
  global.infoListData = infoListData;
} else {
  infoListData = global.infoListData;
}

module.exports = {
  'GET /swim/info/:id' (req, res) {
    const data = infoListData.data.dataList.filter(item => item.id == req.params.id);
    setTimeout(function () {
      res.json({
        success: true,
        data: {
           dataList: data,
        }
      });
    },500);
  }
};
