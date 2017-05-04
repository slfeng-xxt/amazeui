/**
 * @desc 画棋盘
 * @param canvas: Canvas对象
 * @param props: state传过来的数据
 * @return void
 */
const drawChessBoard = (canvas, props) => {
    let ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#ffffff'
    let {
      span,
      lines,
      siderLength,
      step,
      pieces,
      undo,
      isWin,
      winMsg,
      startX,
      startY,
    } = props


    // 横线
    for(let i = 0; i < lines; i++) {
      let x0 = startX
      let y0 = startY + i * span

      let x1 = startX + (lines - 1) * span
      let y1 = y0

      console.log(x0, y0, x1, y1)
      ctx.moveTo(x0, y0)
      ctx.lineTo(x1, y1)
    }

    // 竖线
    for(let i = 0; i < lines; i++) {
      let x0 = startX + i * span
      let y0 = startY

      let x1 = x0
      let y1 = startY + (lines - 1) * span

      console.log(x0, y0, x1, y1)
      ctx.moveTo(x0, y0)
      ctx.lineTo(x1, y1)
    }

    ctx.fill()
    ctx.stroke()
}

/**
 * @desc 在棋盘上画点
 * @param canvas
 * @param props
 * @return void
 *
 * 这里采用先清理，然后再重绘的方式实现
 *
 * 数据从state过来，交互的数据也同步到state
 */
const drawChessPoints = (canvas, props) => {
  let ctx = canvas.getContext('2d')

//  ctx.fillRect(-20, -20, 1000, 1000)

  let {
    width,
    height,
  } = canvas

  // 这里clearRect清理不掉，参考链接http://blog.csdn.net/u011740841/article/details/46862573
  canvas.width = 0
  canvas.width = width
  ctx.clearRect(0, 0, width, height)
  drawChessBoard(canvas, props)

  let {
    points,
    startX,
    startY,
    span,
  } = props

  points.forEach((xData, x) => {
    xData.forEach((data, y) => {
      if(data.color !== '') {
        let cx = startX + x * span
        let cy = startY + y * span
        ctx.beginPath()
        ctx.arc(cx, cy, 10, 0, Math.PI * 2)
        ctx.fillStyle = data.color
        ctx.fill()
        ctx.closePath()
      }
    })
  })
}

export default {
  drawChessBoard,
  drawChessPoints,
}
