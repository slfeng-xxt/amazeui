/**
 * Created by ryan on 2017/1/10.
 */
'use strict';

const qs = require('qs');
const mockjs = require('mockjs');
const pathToRegexp = require('path-to-regexp');
// 数据持久

let coachInfoData = {};
if (!global.coachInfoData) {
  const data = mockjs.mock({
    'data': [
      {
        'gender': false,
        'phone': '13122567788',
        'name': "欧阳慕容",
        'birth': '1989年',
        'id': "e7919406bd1f11e6bfe20242ac11001c",
        'swimPoolId': "f2eb76bebd1b11e6bfe20242ac11001c",
        'avatar': "http://img.release.1yd.me/Fmvv-jWcRdRJ77eW-imht6XKfU1S",
        'introduction': "北京体育大学本科毕业，游泳运动训练专业，学士学位。",
        'email': "北京体育大学本科毕业，游泳运动训练专业，学士学位。"
      },
      {
        'gender': false,
        'phone': '13122567788',
        'name': "欧阳慕容",
        'birth': '1989年',
        'id': "e7919406bd1f11e6bfe20242ac11001c",
        'swimPoolId': "f2eb76bebd1b11e6bfe20242ac11001c",
        'avatar': "http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr",
        'introduction': "北京体育大学本科毕业，游泳运动训练专业，学士学位。",
        'email': "北京体育大学本科毕业，游泳运动训练专业，学士学位。"
      },
      {
        'gender': false,
        'phone': '13122567788',
        'name': "欧阳慕容",
        'birth': '1989年',
        'id': "e7919406bd1f11e6bfe20242ac11001c",
        'swimPoolId': "f2eb76bebd1b11e6bfe20242ac11001c",
        'avatar': "http://img.release.1yd.me/Fmvv-jWcRdRJ77eW-imht6XKfU1S",
        'introduction': "北京体育大学本科毕业，游泳运动训练专业，学士学位。",
        'email': "北京体育大学本科毕业，游泳运动训练专业，学士学位。"
      },
      {
        'gender': false,
        'phone': '13122567788',
        'name': "欧阳慕容",
        'birth': '1989年',
        'id': "e7919406bd1f11e6bfe20242ac11001c",
        'swimPoolId': "f2eb76bebd1b11e6bfe20242ac11001c",
        'avatar': "http://img.release.1yd.me/Fmvv-jWcRdRJ77eW-imht6XKfU1S",
        'introduction': "北京体育大学本科毕业，游泳运动训练专业，学士学位。",
        'email': "北京体育大学本科毕业，游泳运动训练专业，学士学位。"
      },
      {
        'gender': false,
        'phone': '13122567788',
        'name': "欧阳慕容",
        'birth': '1989年',
        'id': "e7919406bd1f11e6bfe20242ac11001c",
        'swimPoolId': "f2eb76bebd1b11e6bfe20242ac11001c",
        'avatar': "http://oiu42aq9j.bkt.clouddn.com/my_digital.png",
        'introduction': "北京体育大学本科毕业，游泳运动训练专业，学士学位。",
        'email': "北京体育大学本科毕业，游泳运动训练专业，学士学位。"
      }
    ]
  });
  coachInfoData = data;
  global.coachInfoData = coachInfoData;
} else {
  coachInfoData = global.coachInfoData;
}

module.exports = {
  'GET /swim/coach/:swimPoolId' (req, res) {
    let data = coachInfoData;
    setTimeout(function () {
      res.json({
        success: true,
        data: data,
      });
    }, 500);
  }
};
