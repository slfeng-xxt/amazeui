import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-bottom">
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-4">
            <a href="#"><p className="nav-option nav-bottom-active">推荐</p></a>
          </div>
          <div className="col-xs-4">
            <a href="html/my-follow/index.html"><p className="nav-option">我的关注</p></a>
          </div>
          <div className="col-xs-4">
            <a href="html/user/index.html"><p className="nav-option">个人中心</p></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
