import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head

import { Footer } from '../../components/WXLayout'

function Search({ location, dispatch, search, loading }) {
  return (
    <div>
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/css/search/search.css" />
      </Helmet>
      <div className="search-frame">
        <div className="row">
          <div className="col-xs-10">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            <input type="text" className="form-control" id="search-input" placeholder="搜索学校/创作人/直播间" />
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
          <div className="col-xs-2 text-center">
            <a href="" className="search-btn">搜索</a>
          </div>
        </div>
      </div>
      <ul className="contert-main">
        <p className="contert-main-title">学校<a href="#"><span className="pull-right">更多&gt;</span></a></p>
        <li>
          <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWMxZmE4OTQ4OSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YzFmYTg5NDg5Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" />
                </a>
              </div>
              <div className="media-body">
                <h5 className="media-heading">深圳第X中学</h5>
                <p className="clearfix"><span className="pull-left">100人关注</span></p>
              </div>
              <div className="media-right">
                <a href="#" className="attention-btn"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>添加关注</a>
              </div>
            </div>
        </li>
      </ul>

      <ul className="contert-main">
        <p className="contert-main-title">学校<a href="#"><span className="pull-right">更多&gt;</span></a></p>
        <li>
          <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWMxZmE4OTQ4OSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YzFmYTg5NDg5Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" />
                </a>
              </div>
              <div className="media-body">
                <h5 className="media-heading">深圳第X中学</h5>
                <p className="clearfix"><span className="pull-left">100人关注</span></p>
              </div>
              <div className="media-right">
                <a href="#" className="attention-btn"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>添加关注</a>
              </div>
            </div>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default connect(
  ({ search, loading }) => ({ search, loading: loading.models.search })
)(Search)
