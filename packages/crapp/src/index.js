import React from 'react'
import dva, { connect } from 'dva'
import { Router, Route } from 'dva/router'
import App from './App'
import './App.css'

const app = dva()
app.model({
  namespace: 'app',
  state: {
    span: 30,
    lines: 15,
    siderLength: 500,
    step: 0,
    pieces: [],
  },
  reducers: {
    onMove(state, action) {
      return {
        ...state,
        step: state.step + 1,
        pieces: state.pieces.concat({
          x: action.payload.x,
          y: action.payload.y,
          color: action.payload.color,
        })
      }
    }
  },
})

app.router(({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  )
})
app.start('#root')
