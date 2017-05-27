import React from 'react'
import { Router, Route } from './dva/router'

import App from './routes/app.js'
import Home from './routes/home/'

const Routers = ({history}) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default Routers
