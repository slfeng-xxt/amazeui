import React from 'react'
import dva, { connect } from './dva'
import { useRouterHistory, Router, Route } from './dva/router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = useRouterHistory(createBrowserHistory)({basename: '/dma'})

// 1. Initialize
const app = dva({
  history,
  onError(error) {
    console.error('app onError -- ', error)
  }
})

// 2. Model
app.model(require('./models/app'));

// 3. View

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root');
