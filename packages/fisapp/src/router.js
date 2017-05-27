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
        require.async('./models/home', () => {
          cb(null, { component: require('./routes/home/') })
        })
      },
      childRoutes: [
        {
          path: 'count',
          name: 'count',
          getComponent (nextState, cb) {
            require.async('./models/count', () => {
              cb(null, { component: require('./routes/count/') })
            })
          },
        }, {
          path: '*',
          name: 'error',
          getComponent (nextState, cb) {
            cb(null, { component: require('./routes/error/') })
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
