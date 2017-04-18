import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Icon from '../components/icon'
import '../components/style/index.less'

function App ({ children, location, dispatch, app, loading }) {
  return (
    <div>
      <Icon type="link" />链接
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

export default connect(({ app, loading }) => ({ app, loading: loading.models.app }))(App)
