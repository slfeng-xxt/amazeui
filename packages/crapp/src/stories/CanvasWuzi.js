import React from 'react'
import PropTypes from 'prop-types'

import './wuzi.css'
import WuziHead from './WuziHead'
import CanvasChess from './CanvasChess'

const CanvasWuzi = (props) => (
  <div className="wrapper">
    <WuziHead {...props} />
    <div className="board">
      <div className="grids">
        <CanvasChess {...props} />
      </div>
    </div>
  </div>
)

CanvasWuzi.propTypes = {
}

export default CanvasWuzi
