import React from 'react'
import PropTypes from 'prop-types'

import './wuzi.css'
import SVGLine from './SVGLine'

const DomWuzi = (props) => (
  <div className="wrapper">
    <div className="header">
      <h2>Dom版本五子棋</h2>
      <div className="info">这是第{props.step}步, 下一步轮到{(props.step % 2 === 0) ? 'black' : 'white'}</div>
    </div>
    <div className="board">
      <div className="grids">
        <SVGLine {...props} />
      </div>
    </div>
  </div>
)
DomWuzi.propTypes = {
}

export default DomWuzi
