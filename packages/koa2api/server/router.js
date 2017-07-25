'use strict'
const router = require('koa-router')()
const userCtrl = require('../controllers/users/UserController')

router.get('/api/user/info', userCtrl.info)
