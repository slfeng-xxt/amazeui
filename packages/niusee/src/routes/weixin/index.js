import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slick-override.less"
import { Helmet } from 'react-helmet' // 可复用head
import { Header, List, Footer } from '../../components/WXLayout'

import styles from './index.less'
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

  const slideSettings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
      <Slider {...slideSettings}>
        <div><h3>Slider 1</h3></div>
        <div><h3>Slider 2</h3></div>
        <div><h3>Slider 3</h3></div>
      </Slider>
      <List />
      <Footer curpath={curpath} />
    </div>
  )
}

export default connect(
  ({ weixin, loading }) => ({ weixin, loading: loading.models.weixin })
)(Weixin)
