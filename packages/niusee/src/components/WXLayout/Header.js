import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.less'
const Header = (props) => {
  let {
    cate,
    changeCate,
  } = props

  let menus = [
    { name: '推荐', cate: 'recommend', },
    { name: '直播', cate: 'live', },
    { name: '课程', cate: 'course', },
    { name: '活动', cate: 'activity', },
    { name: '学校', cate: 'school', },
  ]

  let Menus = []
  menus.map((item, index) => {
    let activeClass = ''
    if (cate === item.cate) {
      activeClass = ' nav-top-active'
    }
    Menus.push(
      <div className="col-xs-2" key={`topnav${index}`}>
        <a><p data-cate={item.cate} className={`nav-option${activeClass}`}>{item.name}</p></a>
      </div>
    )
  })
  return (
    <nav className="navbar navbar-default navbar-fixed-top" onClick={changeCate}>
      <div className="container">
        <div className="row text-center">
          {Menus}
          <div className="col-xs-2 nav-option">
            <a href="html/search/index.html"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
