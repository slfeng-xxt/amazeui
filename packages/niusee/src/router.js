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
          registerModel(app, require('./models/home'))
          cb(null, { component: require('./routes/home/') })
        }, 'home')
      },
      childRoutes: [
        {
          path: 'home',
          name: 'home',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/home'))
              cb(null, require('./routes/home/'))
            }, 'home')
          },
        }, {
          path: 'weixin',
          name: 'weixin',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/weixin'))
              cb(null, require('./routes/weixin/'))
            }, 'weixin')
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
