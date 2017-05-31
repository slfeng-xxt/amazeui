import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { Helmet } from 'react-helmet' // 可复用head
import { Header, List, Footer } from '../../components/WXLayout'

function Ucenter({ location, dispatch, ucenter, loading }) {
  let {
    curpath,
  } = ucenter

  return (
    <div className="content">
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/css/user/user.css" />
      </Helmet>

      <div className="user-head">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 text-center">
              <img src="" />
            </div>
            <div className="col-xs-8 ">
              <div className="user-head-name">
                <div>名字</div>
                <p><span>20</span>人关注了我</p>
              </div>
            </div>
            <div className="col-xs-1 text-left">
              <Link to="/profile"><div className="user-head-right">
                <i className="glyphicon glyphicon-menu-right"></i>
              </div></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="user-nav">
        <div className="container">
          <Link to="/history"><div className="row user-nav-list">
            <div className="col-xs-11">
              我的观看记录
            </div>
            <div className="col-xs-1">
              <div className="user-nav-list-right">
                <i className="glyphicon glyphicon-menu-right"></i>
              </div>
            </div>
          </div></Link>
          <Link to="favorite"><div className="row user-nav-list user-nav-last">
            <div className="col-xs-11">
              我的收藏
            </div>
            <div className="col-xs-1">
              <div className="user-nav-list-right">
                <i className="glyphicon glyphicon-menu-right"></i>
              </div>
            </div>
          </div></Link>
        </div>
      </div>

      <div className="user-nav">
        <div className="container">
          <Link to="/expenditure"><div className="row user-nav-list">
            <div className="col-xs-11">
              我的支出
            </div>
            <div className="col-xs-1">
              <div className="user-nav-list-right">
                <i className="glyphicon glyphicon-menu-right"></i>
              </div>
            </div>
          </div></Link>
          <Link to="/income"><div className="row user-nav-list user-nav-last">
            <div className="col-xs-11">
              我的收益
            </div>
            <div className="col-xs-1">
              <div className="user-nav-list-right">
                <i className="glyphicon glyphicon-menu-right"></i>
              </div>
            </div>
          </div></Link>
        </div>
      </div>

      <Footer curpath={curpath} />
    </div>
  )
}

export default connect(
  ({ ucenter, loading }) => ({ ucenter, loading: loading.models.ucenter })
)(Ucenter)
