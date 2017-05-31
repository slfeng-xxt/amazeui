import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
  let {
    datas,
  } = props

  let items = []
  datas.map((item, index) => {
    items.push(
      <li key={`listitem-${index}`}>
        <div className="media">
          <div className="media-left">
            <a href={item.link}>
              <img src={item.img} />
            </a>
          </div>
          <div className="media-body">
            <h5 className="media-heading">{item.name}</h5>
            <p className="clearfix"><span className="pull-left">{item.create_time}</span><span className="pull-right">{item.viewed}人观看</span></p>
          </div>
        </div>
      </li>
    )
  })
  return (
    <div>
      <ul className="contert-main">
        {items}
      </ul>
    </div>
  )
}

export default List
