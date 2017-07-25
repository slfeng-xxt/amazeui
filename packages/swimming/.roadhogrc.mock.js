const qs = require('qs');
const mockjs = require('mockjs');

// 数据持久
let poolListData = {};
if (!global.poolListData) {
  const data = mockjs.mock({
    'data': {
      'dataList|50': [{
        'id': '@string("lower", 32)',
        spName: '@cname',
        spAvatar: 'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr',
        'phone|18688888888-1869999999': 18688888888,
        'price|11-99': 1,
        'fixedNumber|11-99': 1,
        'arrivedNumber|11-99': 1,
        'waterQuality':'优',
        'temperature|20-30': 20,
        'score|1-5': 5,
        'rating|1-5': 1,
        address: '@city(true)'
      }],
      pageNo: 1,
      pageSize: 20,
      pageCount: 20,
      totalCount: 50
    }
  });
  poolListData = data;
  global.poolListData = poolListData;
} else {
  poolListData = global.poolListData;
}

export default {
  // // 支持值为 Object 和 Array
  // 'GET /api/users': { users: [1,2] },
  //
  // // GET POST 可省略
  // '/api/users/1': { id: 1 },
  //
  // // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => { res.end('OK'); },

  'GET /swim/pools/public' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.pageNo || 1;
    let data = poolListData.data.dataList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    setTimeout(function () {
      res.json({
        success: true,
        data: {
          dataList: data,
          pageNo: currentPage * 1,
          pageSize: pageSize * 1,
          pageCount: Math.ceil(poolListData.data.dataList.length / pageSize ),
          totalCount: poolListData.data.totalCount
        }
      });
    },200);
  },
  'GET /swim/pools/public/:id' (req, res) {
    const data = poolListData.data.dataList.find(item => item.id == req.params.id);
    setTimeout(function () {
      res.json({
        success: true,
        data: data
      });
    },200);
  }
};
