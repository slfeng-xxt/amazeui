import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'


import {
  Icon,
  Row,
  Col,
  Button,
  Modal,
} from '../components'
import 'antd/dist/antd.css'
import styles from './app.less'

function App ({ children, location, dispatch, app, loading }) {
  const {
    isVisible,
  } = app

  const showModal = () => {
    dispatch({
      type: 'app/showModal',
    })
  }

  const handleOk = () => {
  }

  const handleCancel = () => {
    dispatch({
      type: 'app/hideModal',
    })
  }
  return (
    <div className={styles.normal}>
      <Row>This is a row</Row>
      <Row>
        <Col span={12}>这是一个Col</Col>
        <Col span={12}>这是一个Col</Col>
      </Row>
      <Button type="primary" onClick={showModal}><Icon type="link" />弹窗</Button>
      <Modal title="弹窗标题" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>Hello</div>
      </Modal>
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
