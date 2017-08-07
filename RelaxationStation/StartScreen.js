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
          <Text style={styles.readyText}>I'm read to relax...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889DAD',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FFF',
    marginTop: 20
  },
  button: {
    backgroundColor: '#889DAD',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage: {
    height: 200,
    width: 200
  }
});

export default StartScreen;
