import React from 'react';
import dva from './dva';
import { Router, Route, useRouterHistory } from './dva/router';

import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = useRouterHistory(createBrowserHistory)({basename: '/dma'})

// 1. Initialize
const app = dva({
  history,
  onError(error) {
    console.error('app onError -- ', error)
  }
});

// 2. Model
app.model(require('./models/count.js'));

// 3. View
// 4. Router
app.router(require('./router.js'));

// 5. Start
app.start('#root');
