import React from 'react'
import PropTypes from 'prop-types'
import { connect } from '../dva'

const App = connect(({ count }) => ({
  count,
}))((props) => {
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add' }); }}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus' }); }}>-</button>
    </div>
  );
});

export default connect(({ app }) => ({ app }))(App)
