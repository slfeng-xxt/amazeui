import React, { Component } from 'react'
import { connect } from 'dva'
import DomWuzi from './stories/DomWuzi'

// 这个常量需要提到配置文件中
const origStroke = 3
function App({ children, location, dispatch, app }) {
  const {
    span,
    lines,
    step,
    pieces,
    siderLength,
  } = app

  const wuziProps = {
    siderLength,
    span,
    lines,
    step,
    pieces,
    onMove: (e) => {
      const tagName = e.target.tagName
      if(tagName === 'circle') { // 对circle元素进行事件处理
        /**
         * cx, cy is a SVGAnimatedLength Object
         * has the following properties:
         * 1. animVal
         * 2. baseVal
         */
        const {
          cx,
          cy,
          r
        } = e.target

        if(r.animVal.value === origStroke) { // 已经下子的地方不能再点击
          const isBlack = (step % 2 === 0)
          dispatch({
            type: 'app/onMove',
            payload: {
              x: cx.animVal.value,
              y: cy.animVal.value,
              color: (isBlack ? 'black' : 'white'),
            },
          })
        }
      }
    }
  }
  return (
    <div className="App">
      <DomWuzi {...wuziProps} />
    </div>
  )
}
export default connect(({ app }) => ({ app }))(App)
