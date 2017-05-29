import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.less'
const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-2">
            <a href="#"><p className="nav-option nav-top-active">推荐</p></a>
          </div>
          <div className="col-xs-2 nav-option">
            <a href="#"><p className="nav-option">直播</p></a>
          </div>
          <div className="col-xs-2 nav-option">
            <a href="#"><p className="nav-option">课程</p></a>
          </div>
          <div className="col-xs-2 nav-option">
            <a href="#"><p className="nav-option">活动</p></a>
          </div>
          <div className="col-xs-2 nav-option">
            <a href="#"><p className="nav-option">学校</p></a>
          </div>
          <div className="col-xs-2 nav-option">
            <a href="html/search/index.html"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
