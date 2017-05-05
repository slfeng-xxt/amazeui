import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './wuzi.css'
import { SVGLINE_STROKE } from '../constants'

class SVGChess extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let svg = ReactDOM.findDOMNode(this.refs.svg)

    console.log(svg.clientX)
  }

  render() {
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
    } = this.props

    let style = {
      stroke: 'rgb(255, 255, 255)',
      strokeWidth: SVGLINE_STROKE,
    }

    let lineItems = []
    let rectItems = []
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
      // 竖向线条
      let vertProps = {
        x1: startX + (i - 1) * span,
        y1: startY,
        x2: startX + (i - 1) * span,
        y2: startY + (lines - 1) * span,
        style,
      }
      lineItems.push(<line {...vertProps} key={`vertical-${i}`} />)
    }

    // 画方块和棋子
    let dotItems = []
    for(let i = 1; i <= lines; i++) {
      for(let j = 1; j <= lines; j++) {
        let x = startX + (i - 1) * span
        let y = startY + (j - 1) * span
        const rectProps = {
          style: {
            fill: '#ffffff',
          },
          fillOpacity: 0,
          strokeOpacity: 0,
          x: x - span / 2,
          y: y - span / 2,
          width: span,
          height: span,
        }

        pieces.map(piece => {
          const circleProps = {
            cx: x,
            cy: y,
          }

          if(piece.x === x && piece.y === y) {
            console.log('here')
            circleProps.r = 10
            circleProps.stroke = piece.color
            circleProps.fill = piece.color
            dotItems.push(
              <circle key={`dot-${x}${y}`} {...circleProps} />
            )
          }
        })

        rectItems.push(
          <rect key={`rect-${x}-${y}`} {...rectProps} />
        )
      }
    }



    const svgProps = {
      width: 450,
      height: 450,
    }

    if(isWin === false) {
      svgProps.onClick = onMove
    }

    return (
      <div className="chessboard">
        <svg ref="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" {...svgProps}>
          {lineItems}
          {dotItems}
          {rectItems}
        </svg>
      </div>
    )
  }
}


SVGChess.propTypes = {
}

export default SVGChess
