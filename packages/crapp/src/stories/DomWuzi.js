import React from 'react'
import PropTypes from 'prop-types'

import './wuzi.css'
import SVGLine from './SVGLine'
import WuziHead from './WuziHead'

const DomWuzi = (props) => (
  <div className="wrapper">
    <WuziHead {...props} />
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
