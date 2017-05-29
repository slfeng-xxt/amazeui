import React from 'react'
import PropTypes from 'prop-types'
// https://github.com/younth/react-swipes
import ReactSwipe from 'react-swipes'

import styles from './index.less'

const Slider = (props) => {
  let card = props.card
  let opt = {
    distance: 620, // 每次移动的距离，卡片的真实宽度
    swTouchend: (ev) => {
      let data = {
        moved: ev.moved,
        originalPoint: ev.originalPoint,
        newPoint: ev.newPoint,
        cancelled: ev.cancelled
      }
      //this.setState({
      //  curCard: ev.newPoint
      //})
    }
  }

  let cardItems = []
  if(card.length) {
    card.map((item, index) => {
      cardItems.push(<div className={styles.item} key={`card-${index}`}>{item}</div>)
    })
  }

  return (
    <div className={styles.viewport}>
      <ReactSwipe className={styles.flipsnap} options={opt}>
        {cardItems}
      </ReactSwipe>
    </div>
  )
}

export default Slider
