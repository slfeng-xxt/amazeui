import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  drawChessBoard,
  drawChessPoints,
} from '../utils/'

import WuziHead from './WuziHead'

class CanvasChess extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 通过js设置高度和宽度
    let width = this.props.siderLength
    let canvas = ReactDOM.findDOMNode(this.refs.canvas)
    canvas.width = width
    canvas.height = width

    this.canvas = canvas

    drawChessBoard(canvas, this.props)
  }

  handleClick(e) {
    let canvas = this.canvas

    let {
      startX,
      startY,
      span,
      step,
      lines,
      points,
      onMove,
      isWin,
    } = this.props
    let rect = canvas.getBoundingClientRect()

    let x = e.clientX - rect.left * (canvas.width / rect.width)
    let y = e.clientY - rect.top * (canvas.height / rect.height)

    let ctx = canvas.getContext('2d')

    // 根据当前点击x, y确定对应在棋盘上的坐标
    let xIndex = parseInt(Math.round((x - startX) / span), 10)
    let yIndex = parseInt(Math.round((y - startY) / span), 10)

    // 边界处理，最大索引不超过最大行数或列数
    if(xIndex >= lines) {
      xIndex = lines - 1
    }

    if(yIndex >= lines) {
      yIndex = lines - 1
    }

    let cx = startX + xIndex * span
    let cy = startY + yIndex * span


    if(!isWin && points[xIndex] && points[xIndex][yIndex] && (points[xIndex][yIndex].color === '')) {
      onMove({
        xIndex,
        yIndex,
        cx,
        cy,
        ctx
      })

      drawChessPoints(canvas, this.props)
/*
      ctx.beginPath()
      ctx.arc(cx, cy, 10, 0, Math.PI * 2)
      ctx.fillStyle = (step % 2 === 0) ? 'black' : 'white'
      ctx.fill()
      ctx.closePath()
*/
    }
  }

  render() {
    let {
      lines,
      span,
      step,
      isWin,
      winMsg,
      pieces,
      undo,
      version,
      dispatch,
    } = this.props

    let headProps = {
      step,
      isWin,
      winMsg,
      pieces,
      version,
      undo,
      onUndo: () => {
        dispatch({
          type: 'app/undo',
        })

        drawChessPoints(this.canvas, this.props)
      },
      onCancelUndo: () => {
        dispatch({
          type: 'app/cancelUndo',
        })
        drawChessPoints(this.canvas, this.props)
      },
      replay: () => {
        dispatch({
          type: 'app/init'
        })
        drawChessPoints(this.canvas, this.props)
      },
    }
    return (
      <div>
        <WuziHead {...headProps} />
        <div className="chessboard">
          <canvas ref="canvas" onClick={this.handleClick.bind(this)}>
          </canvas>
        </div>
      </div>
    )
  }
}

CanvasChess.propTypes = {
}

export default CanvasChess
