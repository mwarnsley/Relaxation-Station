import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

const zenImage = require('./assets/zen.png');

export default class RelaxationStation extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
          case 'StartScreen':
            return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })}/>
          case 'QuoteScreen':
            return <QuoteScreen />
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
