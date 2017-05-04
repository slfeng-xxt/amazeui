import React from 'react'
import PropTypes from 'prop-types'
import './wuzi.css'

const WuziHead = (props) => {
  const {
    step,
    isWin,
    winMsg,
    pieces,
    undo,
  } = props

  let info = ''
  if (isWin) {
    info = winMsg
  } else {
    if (step > 0) {
      let who = (step % 2 === 0) ? '黑子' : '白子'
      info = `开局中，这是第${step}着, 下一着轮到${who}。`
    } else {
      info = `还未开局，请黑子先着`
    }
  }

  let undoBtn
  if (pieces.length) { // 已经开局，可以撤销
    undoBtn = <button onClick={props.onUndo}>悔棋</button>
  } else {
    undoBtn = <button className="disabled">悔棋</button>
  }

  let cancelBtn
  if (undo.length) { // 有撤销操作，可以取消撤销
    cancelBtn = <button onClick={props.onCancelUndo}>撤销悔棋</button>
  } else {
    cancelBtn = <button className="disabled">撤销悔棋</button>
  }

  return (
    <div className="header">
      <h2>Dom版本五子棋</h2>
      <div className="info">
        <span>{info}</span>
      </div>
      {isWin === false ?
      <div className="actions">
        {undoBtn} {cancelBtn}
        <button onClick={props.replay}>重新开局</button>
      </div>
      : <div className="actions">
        <button onClick={props.replay}>重新开局</button>
      </div>
      }
    </div>
  )
}

WuziHead.propTypes = {
}

export default WuziHead
