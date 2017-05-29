import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head
import { Header, Slider, List, Footer } from '../../components/WXLayout'

function Weixin({ location, dispatch, weixin, loading }) {
  let {
    card,
  } = weixin

  return (
    <div className="content">
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
      </Helmet>
      <Header />
      <Slider card={card} />
      <List />
      <Footer />
    </div>
  )
}

export default connect(
  ({ weixin, loading }) => ({ weixin, loading: loading.models.weixin })
)(Weixin)
