import './index.html'
import 'babel-polyfill'
import dva from 'dva'
import createLoading from 'dva-loading'

import { useRouterHistory } from 'dva/router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = useRouterHistory(createBrowserHistory)({basename: '/schools'})

// 1. Initialize
const app = dva({
  ...createLoading(),
//  history: browserHistory,
  history,
  onError (error) {
    console.error('app onError -- ', error)
  },
})

// 2. Model
app.model(require('./models/app'))


// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
