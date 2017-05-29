import React from 'react'
import { connect } from '../../dva'
import { Link } from 'react-router'

const Count = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add' }); }}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus' }); }}>-</button>
    </div>
  )
}

export default connect(
  ({ count }) => ({ count })
)(Count)
