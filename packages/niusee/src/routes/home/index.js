import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { Helmet } from 'react-helmet' // 可复用head
import { Header } from '../../components/Layout'

import '../../themes/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home({ location, dispatch, home, loading }) {
  return (
    <div>
      <Helmet>
        <title>牛视科技 -- niusee.cn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div>
        <Header />
      </div>
    </div>
  )
}

export default connect(
  ({ home, loading }) => ({ home, loading: loading.models.home })
)(Home)
