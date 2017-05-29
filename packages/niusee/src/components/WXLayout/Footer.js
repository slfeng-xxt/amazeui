import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'

const Footer = (props) => {
  let {
    curpath,
  } = props

  let menus = [
    { name: '推荐', url: 'weixin' },
    { name: '我的关注', url: 'myfollow' },
    { name: '个人中心', url: 'ucenter' },
  ]

  let Menus = []
  menus.map((item, index) => {
    let activeClass = ''
    if (curpath === item.url) {
      activeClass = ' nav-bottom-active'
    }
    Menus.push(
      <div className="col-xs-4" key={`footmenu-${index}`}>
        <Link to={item.url}><p className={`nav-option${activeClass}`}>{item.name}</p></Link>
      </div>
    )
  })
  return (
    <nav className="navbar navbar-default navbar-fixed-bottom">
      <div className="container">
        <div className="row text-center">
        {Menus}
        </div>
      </div>
    </nav>
  )
}

export default Footer
