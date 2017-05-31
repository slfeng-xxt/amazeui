import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet' // 可复用head
import { Footer } from '../../components/WXLayout'

import styles from './profile.less'
function Profile({ location, dispatch, profile, loading }) {
  return (
    <div>
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/css/user/user.css" />
      </Helmet>
      <div className={styles.usernav}>
        <div className="user-nav-material">
          <div className="container">
            <div className="row user-nav-list">
              <div className="col-xs-9">
                头像
              </div>
              <div className="col-xs-2 text-right">
                <div className="user-nav-list-img">
                  <img src="" />
                </div>
              </div>
              <div className="col-xs-1">
                <div className="user-nav-list-right">
                  <i className="glyphicon glyphicon-menu-right"></i>
                </div>
              </div>
            </div>
            <div className="row user-nav-list">
              <div className="col-xs-9">
                姓名
              </div>
              <div className="col-xs-2 text-right">
                <div className="user-nav-list-img">
                  安妮
                </div>
              </div>

              <div className="col-xs-1">
                <div className="user-nav-list-right">
                  <i className="glyphicon glyphicon-menu-right"></i>
                </div>
              </div>
            </div>
            <div className="row user-nav-list user-nav-last">
              <div className="col-xs-9">
                简介
              </div>
              <div className="col-xs-2 text-right">
                <div className="user-nav-list-img">
                  未填写
                </div>
              </div>
              <div className="col-xs-1">
                <div className="user-nav-list-right">
                  <i className="glyphicon glyphicon-menu-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect(
  ({ profile, loading}) => ({ profile, loading: loading.models.profile })
)(Profile)
