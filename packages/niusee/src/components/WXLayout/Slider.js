import React from 'react'
import PropTypes from 'prop-types'
import styles from './Slider.less'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slick-override.less"

class MySlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
    }
  }

  componentDidMount() {

  }

  render() {
    const slideSettings = {
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    let {
      cards,
    } = this.props

    let cardItems = []
    cards.map((item, index) => {
      cardItems.push(
        <div key={`gallery_${index}`}><h3>{item.content}</h3></div>
      )
    })
    return cards.length > 0 ?
      (<Slider {...slideSettings}>
        {cardItems}
      </Slider>) : (<div></div>)
  }
}
export default MySlider
