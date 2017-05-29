import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from './dva/router'

import App from './routes/app.js'

const Routers = function({ history }) {
    const routes = [
        {
            path: '/',
            component: App,
            getIndexRoute(nextState, cb) {
              require('./models/count')
              cb(null, require('./routes/count'))
              /*require.async('./models/count.js', () => {
                cb(null, require('./routes/count'))
              })*/
            },
            childRoutes: [
              {
                path: 'home',
                name: 'home',
                getComponent(nextState, cb) {
                  require('./models/home')
                  cb(null, require('./routes/home'))
                  /*require.async('./models/home.js', () => {
                    cb(null, require('./routes/home'))
                  })*/
                },
              },
              {
                path: 'count',
                name: 'count',
                getComponent(nextState, cb) {
                  require('./models/count')
                  cb(null, require('./routes/count'))
/*                  require.async('./models/count.js', () => {
                    cb(null, require('./routes/count'))
                  })*/
                },
              },
            ],
        }
    ]

    return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
