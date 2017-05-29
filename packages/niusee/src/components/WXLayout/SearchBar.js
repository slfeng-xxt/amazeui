import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <div className="search-frame">
      <div className="row">
        <div className="col-xs-10">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          <input type="text" className="form-control" id="search-input" placeholder="搜索学校/创作人/直播间" />
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </div>
        <div className="col-xs-2 text-center">
          <a href="#" className="search-btn">搜索</a>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
