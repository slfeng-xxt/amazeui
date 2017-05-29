import React from 'react'
import PropTypes from 'prop-types'

import { Router } from 'dva/router'
import App from './routes/app'

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/weixin'))
          cb(null, { component: require('./routes/weixin/') })
        }, 'weixin')
      },
      childRoutes: [
        {
          path: 'weixin',
          name: 'weixin',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/weixin'))
              cb(null, require('./routes/weixin/'))
            }, 'weixin')
          },
        }, {
          path: 'myfollow',
          name: 'myfollow',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/follow'))
              cb(null, require('./routes/follow/'))
            }, 'follow')
          },
        }, {
          path: 'ucenter',
          name: 'ucenter',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/ucenter'))
              cb(null, require('./routes/ucenter/'))
            }, 'ucenter')
          },
        }, {
          path: '*',
          name: 'error',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
