import React from 'react'
import { connect } from '../dva'
import { Link } from 'react-router'

function App ({ children, location, dispatch, app }) {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/count">Count</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}

App.propTypes = {

}
export default connect(
  ({ app }) => ({ app })
)(App)
