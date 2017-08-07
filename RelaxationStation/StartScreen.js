import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Quote from './Quote';

const zenImage = require('./assets/zen.png');

class StartScreen extends Component {
  render() {
    const {onStartHandler} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onStartHandler} style={styles.button}>
          <Image style={styles.buttonImage} source={zenImage} />
        </TouchableOpacity>
        <Text style={styles.readyText}>I'm read to relax...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FFF'
  },
  button: {
    backgroundColor: '#859a9B',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  buttonImage: {
    height: 200,
    width: 200
  }
});

export default StartScreen;
