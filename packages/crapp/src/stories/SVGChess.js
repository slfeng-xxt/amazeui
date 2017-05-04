import React from 'react'
import PropTypes from 'prop-types'
import './wuzi.css'
const origStroke = 3

const SVGChess = (props) => {
  let {
    siderLength,
    span,
    lines,
    onMove,
    step,
    startX,
    startY,
    pieces,
    points,
    isWin,
  } = props

  let style = {
    stroke: 'rgb(255, 255, 255)',
    strokeWidth: origStroke,
  }

  let lineItems = []
  const offsetX = [-15, 5]
  const offsetY = [-2, -5]
  for(let i = 1; i <= lines; i++) {
    /**
     * @desc 横向线条
     */
    let horiProps = {
      x1: startX,
      y1: startY + (i - 1) * span,
      x2: startX + (lines - 1) * span,
      y2: startY + (i - 1) * span,
      style,
    }
    lineItems.push(<line {...horiProps} key={`horizontal-${i}`} />)

    lineItems.push(<text x={horiProps.x1 + offsetX[0]} y={horiProps.y1 + offsetX[1]} fill="black" fontSize="10" key={`labelx-${i}`}>{i}</text>)
    // 竖向线条
    let vertProps = {
      x1: startX + (i - 1) * span,
      y1: startY,
      x2: startX + (i - 1) * span,
      y2: startY + (lines - 1) * span,
      style,
    }
    lineItems.push(<line {...vertProps} key={`vertical-${i}`} />)
    lineItems.push(<text x={vertProps.x1 + offsetY[0]} y={vertProps.y1 + offsetY[1]} fill="black" fontSize="10" key={`labely-${i}`}>{String.fromCharCode(64 + i)}</text>)
  }

  let dotItems = []

  for(let i = 1; i <= lines; i++) {
    for(let j = 1; j <= lines; j++) {
      let x = startX + (i - 1) * span
      let y = startY + (j - 1) * span
      const circleProps = {
        stroke: 'white',
        fill: 'white',
        r: origStroke,
        cx: x,
        cy: y,
      }

      pieces.map(piece => {
        if(piece.x === x && piece.y === y) {
          circleProps.r = 10
          circleProps.stroke = piece.color
          circleProps.fill = piece.color
        }
      })

      dotItems.push(
        <circle key={`dot-${x}-${y}`} {...circleProps} />
      )
    }
  }

  const svgProps = {
    width: siderLength,
    height: siderLength,
  }

  if(isWin === false) {
    svgProps.onClick = onMove
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" {...svgProps}>
      {lineItems}
      {dotItems}
    </svg>
  )
}

SVGChess.propTypes = {
}

export default SVGChess
