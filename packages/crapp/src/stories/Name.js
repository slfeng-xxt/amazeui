import React from 'react'
import PropTypes from 'prop-types'

import './Name.css'

const Name = (props) => (
  <div className={'name ' + (props.type ? props.type : '')}>{props.name}</div>
)

Name.propTypes = {
  type: PropTypes.oneOf(['highlight', 'disabled']),
}

export default Name
