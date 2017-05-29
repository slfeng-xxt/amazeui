import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head
import { Header, List, Footer } from '../../components/WXLayout'

function Follow({ location, dispatch, follow, loading }) {
  let {
    curpath,
  } = follow

  return (
    <div className="content">
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
      </Helmet>
      <Header />
      <List />
      <Footer curpath={curpath} />
    </div>
  )
}

export default connect(
  ({ follow, loading }) => ({ follow, loading: loading.models.follow })
)(Follow)
