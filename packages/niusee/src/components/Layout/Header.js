import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"><img src="img/index-LOGO.png" alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="html/campus-live/index.html" className="ns-fontColor ns-4pxBorderBottom">首页</a></li>
            <li><a href="html/campus-live/index.html">校园直播</a></li>
            <li><a href="html/wonderful-campus/index.html">精彩校园</a></li>
            <li><a href="html/interesting-classNameroom/index.html">趣味课堂</a></li>
            <li><a href="html/school-star/index.html">学校明星</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right nav-right-option visible-lg-block">
            <li><a href="#index-login-modal" data-toggle="modal">登录</a></li>
            <li><a href="javascript:;">|</a></li>
            <li><a href="#" data-toggle="modal" data-target=".mobile-access">手机访问</a></li>
            <li><a href="#" data-toggle="modal" data-target=".app-download">APP下载</a></li>
            <li><a href="#" data-toggle="modal" data-target=".app-binding">APP绑定</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right nav-right-option hidden-lg">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多 <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" data-toggle="modal" data-target=".mobile-access">手机访问</a></li>
                <li><a href="#" data-toggle="modal" data-target=".app-download">APP下载</a></li>
                <li><a href="#" data-toggle="modal" data-target=".app-binding">APP绑定</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">登录</a></li>
              </ul>
            </li>
          </ul>
          <div className="navbar-form navbar-right">
            <div className="form-group" style={{display: 'none'}}>
              <input type="text" className="form-control" placeholder="Search" id="search-input" />
              <button type="submit" className="btn btn-default ns-backColor"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
            </div>
            <span className="glyphicon glyphicon-search navbar-right ns-backColor" aria-hidden="true" id="click-search"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
