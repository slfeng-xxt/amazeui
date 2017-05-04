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
    undo: [],
    isWin: false,
    winMsg: '',
    startX: 15,
    startY: 15,
  },
  reducers: {
    onMove(state, action) {
      let {
        step,
        pieces,
        span,
        startX,
        startY,
      } = state

      let curMove = {
        x: action.payload.x,
        y: action.payload.y,
        color: action.payload.color,
      }

      let isWin = false
      let winMsg = ''
      /**
       * @desc
       * 9着之后有可能会有一方胜出
       * 当前一着尚未放入state, 因此判断step为8次以上。
       *
       * 同时需要判断当前着所在行、所在列、所在两个斜线上
       * 当前着是否有连续5个以上的着
       */
      if(step >= 8) {
        // 分别存储当前玩家的落子位置信息
        let xys = [] // x, y信息
        let yxs = [] // y, x数组

        // 当前着的x, y索引
        let curX = parseInt((curMove.x - startX) / span, 10)
        let curY = parseInt((curMove.y - startY) / span, 10)
        //console.log(pieces)
        let player = (curMove.color === 'black' ? '黑方' : '白方')
        pieces.map(piece => {
          if(piece.color === curMove.color) {
            /**
             * 点坐标公式
             * x = startX + (xline - 1) * span
             * y = startY + (yline - 1) * span
             */
            let x = parseInt((piece.x - startX) / span, 10)
            let y = parseInt((piece.y - startY) / span, 10)
            if(xys[x]) {
              xys[x][y] = piece.color
            } else {
              xys[x] = []
              xys[x][y] = piece.color
            }
            if(yxs[y]) {
              yxs[y][x] = piece.color
            } else {
              yxs[y] = []
              yxs[y][x] = piece.color
            }
          }
        })

        console.log(xys)
        let xcount = 1 // 横向计数器
        let ycount = 1 // 纵向计数器
        let lscount = 1 // 左对角斜线线计数器
        let rscount = 1 // 右对角斜线计数器

        console.log(curX, curY)
        // 判断横向是否有5连子
        for(let i = 1; i < 5; i++) { // 判断右侧
          if(yxs[curY] && (yxs[curY][curX + i] === curMove.color)) {
            xcount++
          } else {
            break;
          }
        }

        for(let i = 1; i < 5; i++) { // 判断左侧
          if((curX - i) && (yxs[curY]) && (yxs[curY][curX - i] === curMove.color)) {
            xcount++
          } else {
            break;
          }
        }

        // 判断纵向是否有5连子
        for(let i = 1; i < 5; i++) { // 判断上侧
          if(xys[curX + i] && (xys[curX + i][curY + i] === curMove.color)) {
            ycount++
          } else {
            break;
          }
        }

        for(let i = 1; i < 5; i++) { // 判断下侧
          if((curY - i) && xys[curX - i] && (xys[curX - i][curY - i] === curMove.color)) {
            ycount++
          } else {
            break;
          }
        }

        // 判断左对角斜线是否有5连着
        for(let i = 1; i < 5; i++) { // 判断右下侧
          if(xys[curX + i] && (xys[curX + i][curY + i] === curMove.color)) {
            lscount++
          } else {
            break;
          }
        }

        for(let i = 1; i < 5; i++) { // 判断左上侧
          if((curY - i) && (curX - i) && xys[curX + i] && (xys[curX + i][curY - i] === curMove.color)) {
            lscount++
          } else {
            break;
          }
        }

        // 判断右对角斜线是否有5连着
        for(let i = 1; i < 5; i++) { // 判断右上侧
          if((curY - i) && xys[curX + i] && (xys[curX + i][curY - i] === curMove.color)) {
            rscount++
          } else {
            break;
          }
        }

        for(let i = 1; i < 5; i++) { // 判断左下侧
          if((curX - i) && xys[curX - i] && (xys[curX - i][curY + i] === curMove.color)) {
            rscount++
          } else {
            break;
          }
        }


        if(xcount >= 5 || ycount >= 5 || lscount >= 5 || rscount >= 5) {
          isWin = true
          winMsg = `${player}胜利!`
        }
      }

      return {
        ...state,
        step: step + 1,
        pieces: pieces.concat(curMove),
        undo: [],
        isWin,
        winMsg,
      }
    },
    undo(state, action) {
      let {
        pieces,
        undo,
        step,
      } = state

      if(pieces.length > 0) {
        undo.push(pieces.pop())

        return {
          ...state,
          pieces,
          step: step - 1,
          undo,
        }
      } else {
        return state
      }
    },
    cancelUndo(state, action) {
      let {
        pieces,
        undo,
        step,
      } = state

      if(undo.length > 0) {
        pieces.push(undo.pop())
        return {
          ...state,
          pieces,
          step: step + 1,
          undo,
        }
      } else {
        return state
      }
    },
    replay(state, action) {
      return {
        ...state,
        pieces: [],
        undo: [],
        isWin: false,
        winMsg: '',
        step: 0,
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
