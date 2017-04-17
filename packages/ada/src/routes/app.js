import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Hello } from '../components/Demo/Hello'

function App ({ children, location, dispatch, app, loading }) {
  return (
    <Hello name="TypeScript" />
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ app, loading }) => ({ app, loading: loading.models.app }))(App)
