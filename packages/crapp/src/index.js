import React from 'react'
import dva, { connect } from 'dva'
import { Router, Route } from 'dva/router'
import App from './App'
import './App.css'

import { checkWin } from './utils/'
import { CONTNUM } from './constants'

const app = dva()
app.model({
  namespace: 'app',
  state: {
    span: 30,  // 棋盘相邻线之间的间距
    lines: 15, // 棋盘线条行数或列数
    siderLength: 450, // 棋盘边长， @deprecated
    step: 0, // 当前的着子次数
    points: [], // 记录棋盘所有点的信息
    pieces: [], // 着子点信息， 后面考虑优化或废弃掉
    undo: [], // 悔棋相关的信息
    isWin: false, // 是否胜利
    winMsg: '', // 胜利后显示的信息
    startX: 15, // 棋盘基于父容器的x偏移值
    startY: 15, // 棋盘基于父容器的y偏移值
    version: 'dom', // 当前查看的实现版本，dom, canvas
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // 这里只有一个路由，就不做路由判断了
      dispatch({
        type: 'init',
      })
    },
  },
  reducers: {
    // 根据行数|列数以及跨度初始化棋盘中落子坐标信息
    init(state, action) { // 初始化棋盘点信息，并将相应的一些state初始化为原始值
      let {
        lines,
        span,
        startX,
        startY,
      } = state

      let points = []
      for(let i = 0; i < lines; i++) {
        for(let j = 0; j < lines; j++) {
          if(!points[i]) {
            points[i] = []
          }
          points[i][j] = {
            x: i * span + startX,
            y: j * span + startY,
            color: '',
          }
        }
      }

      return {
        ...state,
        pieces: [],
        undo: [],
        isWin: false,
        winMsg: '',
        step: 0,
        points,
      }
    },
    /**
     * @desc 着子相应的处理逻辑
     * 由于两种实现掺杂在一起， 待优化
     */
    onMove(state, action) {
      let {
        step,
        pieces,
        span,
        startX,
        startY,
        points,
      } = state

      let curMove = {
        x: action.payload.x,
        y: action.payload.y,
      }

      let isWin = false
      let winMsg = ''

      // x,y坐标对应points中的索引值
      let xindex = parseInt((curMove.x - startX) / span, 10)
      let yindex = parseInt((curMove.y - startY) / span, 10)


      if(points[xindex][yindex].color !== '') { // 已经落子了
        return state
      }

      // 根据step确定当前着子的颜色
      curMove.color = step % 2 === 0 ? 'black' : 'white'
      // 尚未落子的点
      if (step >= (CONTNUM - 1) * 2) {
        isWin = checkWin({
          x: xindex,
          y: yindex,
          color: curMove.color
        }, points)

        if(isWin) {
          let player = (curMove.color === 'black' ? '黑方' : '白方')

          winMsg = `${player}获胜`
        }
      }

      points[xindex][yindex].color = curMove.color
      return {
        ...state,
        step: step + 1,
        pieces: pieces.concat(curMove),
        points,
        undo: [],
        isWin,
        winMsg,
      }
    },
    // 悔棋相应的处理
    undo(state, action) {
      let {
        pieces,
        undo,
        step,
        span,
        startX,
        startY,
        points,
      } = state

      if(pieces.length > 0) {
        let popItem = pieces.pop()
        undo.push(popItem)

        let {
          x,
          y,
          color,
        } = popItem

        let xIndex = parseInt((x - startX) / span, 10)
        let yIndex = parseInt((y - startY) / span, 10)

        points[xIndex][yIndex].color = ''
        return {
          ...state,
          pieces,
          step: step - 1,
          undo,
          points,
        }
      } else {
        return state
      }
    },
    // 取消悔棋操作
    cancelUndo(state, action) {
      let {
        pieces,
        undo,
        step,
        span,
        startX,
        startY,
        points,
      } = state

      if(undo.length > 0) {
        let popItem = undo.pop()
        pieces.push(popItem)

        let {
          x,
          y,
          color,
        } = popItem

        let xIndex = parseInt((x - startX) / span, 10)
        let yIndex = parseInt((y - startY) / span, 10)

        points[xIndex][yIndex].color = color

        return {
          ...state,
          pieces,
          step: step + 1,
          undo,
          points,
        }
      } else {
        return state
      }
    },

    // 重新游戏逻辑，待实现, 有点bug, 先关闭掉
    replay(state, action) {
      return {
        ...state,
        pieces: [],
        undo: [],
        isWin: false,
        winMsg: '',
        step: 0,
        points: [],
      }
    },
    // 切换dom, canvas版本
    toggleVersion(state, action) {
      let {
        lines,
        span,
        startX,
        startY,
      } = state

      let points = []
      for(let i = 0; i < lines; i++) {
        for(let j = 0; j < lines; j++) {
          if(!points[i]) {
            points[i] = []
          }
          points[i][j] = {
            x: i * span + startX,
            y: j * span + startY,
            color: '',
          }
        }
      }

      return {
        ...state,
        pieces: [],
        undo: [],
        isWin: false,
        winMsg: '',
        step: 0,
        points,
        ...action.payload
      }

    },
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
