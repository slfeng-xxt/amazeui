import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native'

import Greeting from './components/Greeting'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGreeting: false,
      text: '',
    }

    setInterval(() => {
      this.setState({ showGreeting: !this.state.showGreeting })
    }, 1000);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({
              text
            })}
            />
        </View>
        <View>
          <Image source={pic} style={{width: 193, height: 110}} />
        </View>
        <View style={{backgroundColor: 'powderblue'}}>
          <Greeting name="Joe" show={this.state.showGreeting} />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
