import React from 'react'
import PropTypes from 'prop-types'
import { connect } from '../dva'

function App ({ children, location, dispatch, app }) {
  return (
    <div>{children}</div>
  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.bool,
}
export default connect(({ app }) => ({ app }))(App)
