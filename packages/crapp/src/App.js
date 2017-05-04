import React, { Component } from 'react'
import { connect } from 'dva'
import SVGChess from './stories/SVGChess'
import CanvasChess from './stories/CanvasChess'
import WuziHead from './stories/WuziHead'

// 这个常量需要提到配置文件中
const origStroke = 3
function App({ children, location, dispatch, app }) {
  const {
    span,
    lines,
    step,
    pieces,
    points,
    undo,
    isWin,
    winMsg,
    siderLength,
    startX,
    startY,
    version,
  } = app

  const wuziProps = {
    siderLength,
    span,
    lines,
    step,
    isWin,
    version,
    winMsg,
    pieces,
    points,
    undo,
    startX,
    startY,
    dispatch,
    onMove: (args) => {
      if(version === 'canvas') {
        return onCanvasMove(args)
      }

      // 对于dom来说args传入的是事件对象e
      let e = args
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
    },
    onUndo: () => {
      dispatch({
        type: 'app/undo',
      })
    },
    onCancelUndo: () => {
      dispatch({
        type: 'app/cancelUndo',
      })
    },
    replay: () => {
      dispatch({
        type: 'app/replay',
      })
    }
  }

  const toggleVersion = (e) => {
    dispatch({
      type: 'app/toggleVersion',
      payload: {
        version: e.target.name,
      }
    })
  }

  const onCanvasMove = (args) => {
    let {
      cx,
      cy,
    } = args
    dispatch({
      type: 'app/onMove',
      payload: {
        x: cx,
        y: cy,
      },
    })
  }

  return (
    <div className="App">
      <div className="versions" onClick={toggleVersion}>
        <a className={version === 'dom' ? 'active' : ''} name="dom">DOM版本</a>
        <a className={version === 'canvas' ? 'active' : ''} name="canvas">Canvas版本</a>
      </div>
      <div className="wrapper">
        {
          (version === 'dom') ?
            (<div><WuziHead {...wuziProps} />
            <SVGChess {...wuziProps} /></div>)
          : <CanvasChess {...wuziProps} />
        }
      </div>
    </div>
  )
}
export default connect(({ app }) => ({ app }))(App)
