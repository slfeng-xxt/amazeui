import React from 'react'
import {
  Text,
} from 'react-native'


export default class Greeting extends React.Component {
  render() {
    let {
      show,
      name,
    } = this.props

    let text = show ? `Hello, ${name}` : ''
    return <Text>{text}</Text>
  }
}
