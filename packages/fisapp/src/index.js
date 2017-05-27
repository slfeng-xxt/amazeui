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
const App = connect(({ count }) => ({
  count,
}))((props) => {
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add' }); }}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus' }); }}>-</button>
    </div>
  );
});

// 4. Router
app.router(({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
});

// 5. Start
app.start('#root');
