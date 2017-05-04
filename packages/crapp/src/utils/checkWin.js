import { CONTNUM } from '../constants'

/**
 * @desc 横向连续N落子检查
 */
const horizontalCheckWin = (curMove, points) => {
  let {
    x,
    y,
    color,
  } = curMove

  let count = 1

  for(let i = 1; i < CONTNUM; i++) {
    if( points[x + i] &&
        points[x + i][y] &&
        (points[x + i][y].color === color)
    ) { // 右侧连续落子检查
      count++

      if(count >= CONTNUM)
        break // 已经满足胜利条件了
    } else {
      break
    }
  }

  for(let i = 1; i < CONTNUM; i++) {
    if(count < CONTNUM) {
      // 检查左侧连续落子检查
      if( points[x - i] &&
          points[x - i][y] &&
          (points[x - i][y].color === color)
      ) {
        count++

        if(count >= CONTNUM) break
      }
    }
  }
  if(count >= CONTNUM) return true
  return false
}

/**
 * @desc 纵向连续N落子检查
 */
const verticalCheckWin = (curMove, points) => {
  let {
    x,
    y,
    color,
  } = curMove

  let count = 1

  for(let i = 1; i < CONTNUM; i++) {
    if( points[x] &&
        points[x][y + i] &&
        (points[x][y + i].color === color)
    ) { // 上侧连续落子检查
      count++

      if(count >= CONTNUM)
        break // 已经满足胜利条件了
    } else {
      break
    }
  }

  for(let i = 1; i < CONTNUM; i++) {
    if(count < CONTNUM) {
      // 下侧连续落子检查
      if( points[x] &&
          points[x][y - i] &&
          (points[x][y - i].color === color)
      ) {
        count++

        if(count >= CONTNUM) break
      }
    }
  }

  if(count >= CONTNUM) return true
  return false
}

/**
 * @desc 左斜线方向连续N落子检查
 */
const leftSlashCheckWin = (curMove, points) => {
  let {
    x,
    y,
    color,
  } = curMove

  let count = 1

  for(let i = 1; i < CONTNUM; i++) {
    if( points[x + i] &&
        points[x + i][y + i] &&
        (points[x + i][y + i].color === color)
    ) { // 右上连续落子检查
      count++

      if(count >= CONTNUM)
        break // 已经满足胜利条件了
    } else {
      break
    }
  }

  for(let i = 1; i < CONTNUM; i++) {
    if(count < CONTNUM) {
      // 左下连续落子检查
      if( points[x - i] &&
          points[x - i][y - i] &&
          (points[x - i][y - i].color === color)
      ) {
        count++

        if(count >= CONTNUM) break
      }
    }

  }
  if(count >= CONTNUM) return true
  return false
}

/**
 * @desc 右斜线方向连续N落子检查
 */
const rightSlashCheckWin = (curMove, points) => {
  let {
    x,
    y,
    color,
  } = curMove

  let count = 1

  for(let i = 1; i < CONTNUM; i++) {
    if( points[x - i] &&
        points[x - i][y + i] &&
        (points[x - i][y + i].color === color)
    ) { // 左上连续落子检查
      count++

      if(count >= CONTNUM)
        break // 已经满足胜利条件了
    } else {
      break
    }
  }

  for(let i = 1; i < CONTNUM; i++) {
    if(count < CONTNUM) {
      // 右下连续落子检查
      if( points[x + i] &&
          points[x + i][y - i] &&
          (points[x + i][y - i].color === color)
      ) {
        count++

        if(count >= CONTNUM) break
      }
    }
  }
  if(count >= CONTNUM) return true
  return false
}

/**
 * @desc 检查当前落子是否满足获胜条件
 * @param curMove Object {x, y, color}: x, y的索引值以及当前的color
 * @return boolean
 */
const checkWin = (curMove, points) => {
  return horizontalCheckWin(curMove, points) ||
      verticalCheckWin(curMove, points) ||
      leftSlashCheckWin(curMove, points) ||
      rightSlashCheckWin(curMove, points)
}

module.exports = {
  checkWin,
}
