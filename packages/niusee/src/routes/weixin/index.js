import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head
import { Header, Slider, List, Footer } from '../../components/WXLayout'

function Weixin({ location, dispatch, weixin, loading }) {
  let {
    curpath,
    card,
    cate,
  } = weixin

  const headProps = {
    cate,
    changeCate: function(e) {
      let target = e.target
      let cate = target.getAttribute('data-cate')
      dispatch({
        type: 'weixin/changeCate',
        payload: {
          cate,
        }
      })
    }
  }
  return (
    <div className="content">
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
      </Helmet>
      <Header {...headProps} />
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination swiper-pagination-bullets">
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        </div>
      </div>
      <List />
      <Footer curpath={curpath} />
    </div>
  )
}

export default connect(
  ({ weixin, loading }) => ({ weixin, loading: loading.models.weixin })
)(Weixin)
