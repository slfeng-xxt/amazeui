import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head
import { SearchBar, List, Footer } from '../../components/WXLayout'

function Follow({ location, dispatch, follow, loading }) {
  let {
    curpath,
  } = follow

  return (
    <div className="content">
      <Helmet>
        <title>牛视科技公众号 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="renderer" content="webkit" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/css/search/search.css" />
        <link rel="stylesheet" href="/css/my-follow/my-follow.css" />
      </Helmet>
      <SearchBar />
      <ul className="myfollow-nav clearfix">
        <a href="index.html"><li className="active">学校</li></a>
        <a href="creator.html"><li>创作人</li></a>
        <a href="play-room.html"><li>直播间</li></a>
      </ul>
      <h6 className="maybe-title">可能感兴趣的学校</h6>
      <ul className="contert-main">
        <li>
          <div className="media">
              <div className="media-left">
                <a href="schoolInfo.html">
                  <img className="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWMxZmE4OTQ4OSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YzFmYTg5NDg5Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" />
                </a>
              </div>
              <div className="media-body">
                <h5 className="media-heading">深圳第X中学</h5>
                <p className="clearfix"><span className="pull-left">100人关注</span></p>
              </div>
              <div className="media-right">
                <a href="#" className="attention-btn"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>取消关注</a>
              </div>
            </div>
        </li>
      </ul>
      <Footer curpath={curpath} />
    </div>
  )
}

export default connect(
  ({ follow, loading }) => ({ follow, loading: loading.models.follow })
)(Follow)
