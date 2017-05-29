import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

function App({ children, location, dispatch, app, loading }) {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(
  ({ app, loading }) => ({ app, loading: loading.models.app })  // mapState2Props
)(App)
