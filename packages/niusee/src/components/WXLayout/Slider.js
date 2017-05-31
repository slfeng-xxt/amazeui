import React from 'react'
import PropTypes from 'prop-types'
import styles from './Slider.less'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
    }
  }

  componentDidMount() {

  }

  render() {
    let cards = [
      { content: 'Slide 1', },
      { content: 'Slide 2', },
      { content: 'Slide 3', },
    ]

    let slideItems = []
    let slidePG = []
    
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className={styles.pg}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
export default Slider
