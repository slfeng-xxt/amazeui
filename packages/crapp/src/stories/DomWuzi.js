import React from 'react'
import PropTypes from 'prop-types'

import './wuzi.css'
import WuziHead from './WuziHead'
import SVGChess from './SVGChess'

const DomWuzi = (props) => (
  <SVGChess {...props} />
)
DomWuzi.propTypes = {
}

export default DomWuzi
