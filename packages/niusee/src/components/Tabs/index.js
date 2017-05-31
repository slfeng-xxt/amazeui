import React from 'react'
import PropTypes from 'prop-types'

const Tabs = (props) => {
  let {
    options,
    curTab,
    changeTab,
  } = props

  let tabItems = []
  let tabPanel = ''
  options.map((item, index) => {
    let className = ''
    if(item.key === curTab) {
      className = 'active'
      tabPanel = item.Element
    }

    tabItems.push(
      <a key={`tab_${item.key}_${index}`}><li data-which={item.key} className={className}>{item.name}</li></a>
    )
  })
  return (
    <div>
      <ul className="myfollow-nav clearfix" onClick={changeTab}>
        {tabItems}
      </ul>
      {tabPanel}
    </div>
  )
}

Tabs.propTypes = {
}

export default Tabs
