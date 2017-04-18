import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'


import {
  Icon,
  Row,
  Col,
} from '../components'
import 'antd/dist/antd.css'
import styles from './app.less'

function App ({ children, location, dispatch, app, loading }) {
  return (
    <div className={styles.normal}>
      <Icon type="link" />链接
      <Row>This is a row</Row>
      <Row>
        <Col span={12}>这是一个Col</Col>
        <Col span={12}>这是一个Col</Col>
      </Row>
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
